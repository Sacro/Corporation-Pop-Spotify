process.env.NODE_ENV = 'test';

module.exports = function(w) {
  return {
    compilers: {
      '**/*.ts?(x)': w.compilers.typeScript({ isolatedModules: true }),
    },
    // debug: true,
    env: {
      runner: 'node',
      type: 'node',
    },
    files: [
      'sample.env',
      'package.json',
      'tsconfig.json',
      { pattern: 'src/**/*.ts', load: false },
      { pattern: 'src/main.ts', ignore: true },
      { pattern: 'src/main.hmr.ts', ignore: true },
      { pattern: 'src/**/*.json', ignore: true },
      { pattern: 'src/**/*.module.ts', ignore: true },
      { pattern: 'src/**/*.spec.ts', ignore: true },
    ],
    reportConsoleErrorAsError: true,
    setup: function(wallaby) {
      var jestConfig = require('./package.json').jest;
      // for example:
      // jestConfig.globals = { "__DEV__": true };
      wallaby.testFramework.configure(jestConfig);
    },
    testFramework: 'jest',
    tests: ['src/**/*.spec.ts'],
  };
};
