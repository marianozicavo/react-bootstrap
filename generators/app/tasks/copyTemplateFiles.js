const mkdirp = require('mkdirp');

const {
  FILES,
  FILES_TO_DELETE,
  TEMPLATE_FILES,
  FLOWCONFIG_PATH,
  CI_CONFIG_FILE,
  LINTER_IGNORE_PATH,
  BABELRC_PATH,
  WITHOUT_SEAMLESS_FILES
} = require('../constants');

const { copyTpl, copy, copyEjsTpl, deleteFiles } = require('./utils');

module.exports = function copyTemplateFiles() {
  const bindedCopy = copy.bind(this);
  const bindedCopyTpl = copyTpl.bind(this);
  const bindedCopyEjsTpl = copyEjsTpl.bind(this);
  const bindedDeleteFiles = deleteFiles.bind(this);

  FILES_TO_DELETE.forEach(src => bindedDeleteFiles(src));

  FILES.forEach(path => bindedCopy(path, path, null, { projectName: this.projectName }));

  TEMPLATE_FILES.forEach(path => bindedCopyEjsTpl(path));

  mkdirp(this.destinationPath(`${this.projectName}/src/app/assets/`));

  if (this.features.flow) {
    bindedCopy(FLOWCONFIG_PATH.src, FLOWCONFIG_PATH.destination);
  }
  if (!this.features['seamless-immutable']) {
    WITHOUT_SEAMLESS_FILES.forEach(paths => bindedCopy(paths.src, paths.destination));
  }

  bindedCopy(LINTER_IGNORE_PATH.src, LINTER_IGNORE_PATH.destination);

  bindedCopy(BABELRC_PATH.src, BABELRC_PATH.destination);

  bindedCopyTpl(CI_CONFIG_FILE, CI_CONFIG_FILE, {
    projectName: this.projectName
  });

  bindedCopyTpl('public/_index.html', 'public/index.html', {
    title: this.projectName
  });
};
