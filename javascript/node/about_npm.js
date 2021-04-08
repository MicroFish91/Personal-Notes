// NPM Packages: npmjs.com

// For Mac perfix command using 'sudo' anytime you make a -g (global) change via command-line

// ** Semantic versioning (SemVer) **
// 4.13.6 => Major.Minor.Patch
// ^4.13.6 => '^' update any version that follows 4.x
// ~4.13.6 => '~' update any version that follows 4.13.x
// 4.13.6 => only takes this version

// ** Listing Installed Packages **
// Version shown by main package.json file could be lower than what was downloaded during an npm install
// To see current version, go to the actual package subfolder's package.json to see the version installed
// or even faster, use 'npm list --depth=0' to see just your immediate dependency versions

// ** Viewing Registry Info & Dependencies for a Specific Package **
// You can use 'npm view [package-name]' (this pull sup the package's package.json file) and scroll down to 'dependencies' to see a list of all of a package's dependencies
// or you can just type 'npm view mongoose dependencies' to bypass straight to viewing that section of the package.json file
// You can see a list of all versions by typing 'npm view [package-name] versions'

// ** Installing a specific version ** => 'npm i mongoose@2.4.2'

// ** Updating Local Packages **
// Use 'npm outdated' to view information about updating local packages
// 'npm updated' will update to the version under the 'Wanted' column
// can use 'ncu' and 'ncu -u' to update up to latest version regardless of Semantic versioning
// look up how to do this with individual packages as necessary *

// ** Development dependencies (e.g. test dependencies) - package.json => devDependencies**
// Should not make it into the production environment
// use command 'npm i [package-name] --save-dev

// ** Uninstall a Package **
// 'npm un [package-name]'

// ** Global Packages **
// Packages that you can run from anywhere, not specific to a given project
// npm is an example of such a package - npm i -g npm@version
// 'npm i -g [package-name]'
// To see outdated global packages - 'npm -g outdated'

// ** Publishing a Package to NPM Website **
// 'npm login' => username, pw, email
// 'npm publish'

// ** Updating a Published Package **
// 'npm version [major | minor | patch]' - updates the major version, minor version, or patch version to the next level
// then 'npm publish'