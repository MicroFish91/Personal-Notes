// NPM Packages: npmjs.com

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

// 