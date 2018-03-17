const shelljs = require("shelljs");

if (shelljs.exec("tslint --fix \"@(src|spec|scripts)/**/*.@(j|t)s?(x)\"").code !== 0) {
  shelljs.echo("Error: TSLint failed");
  shelljs.exit(1);
}
