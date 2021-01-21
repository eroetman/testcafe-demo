const minimist = require('minimist');
const createTestCafe = require('gherkin-testcafe');
let testcafe = null;

const args = minimist(process.argv.slice(2));

// Set other browser. Example: -browser='chrome:headless'
let browser = args.browser
    ? args.browser
    : 'chrome:emulation:cdpPort=9222;width=1024;height=768;mobile=false;';

// Change autoplay to detect signal sound and DOM-change when playing sound
browser += ' --autoplay-policy=no-user-gesture-required';

// Use live (watch-) mode
const watch = args.watch ? args.watch : false;

// Make video recording
const video = args.video ? args.video : false;

const path = ['cucumber/**/*.ts', 'cucumber/**/*.feature'];

const RUNNER_OPTIONS = {
    skipJsErrors: false,
    skipUncaughtErrors: false,
    debugMode: false,
    inspectBrk: false,
    videoPath: 'reports/videos',
    videoOptions: {
        failedOnly: true,
        singleFile: false,
        pathPattern: '${DATE}_${TIME}/test-${TEST_INDEX}-${TEST}/${FILE_INDEX}.mp4'
    }
};

if (!video) {
    delete RUNNER_OPTIONS.videoPath;
    delete RUNNER_OPTIONS.videoOptions;
}

console.log('Tests source path: ' + path);
console.log('Using browser: ' + browser);

const getRunner = (tc) => (
    (watch) ? tc.createLiveModeRunner.bind(tc) : testcafe.createRunner.bind(tc)
);

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runnerFactory = getRunner(testcafe);
        const runner = runnerFactory();

        return runner
            .src(path)
            .browsers(browser)
            .concurrency(1)
            .run(RUNNER_OPTIONS);
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });
