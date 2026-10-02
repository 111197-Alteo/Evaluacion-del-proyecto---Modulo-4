reporters: [
    'progress',
    'junit'
],

junitReporter: {
    outputDir: 'test-results',
    outputFile: 'junit.xml',
    useBrowserName: false
}
npm test
test-results/
└── junit.xml
