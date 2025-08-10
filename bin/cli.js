#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk').default;
const fs = require('fs-extra');
const path = require('path');

// Package version
const version = require('../package.json').version;

// ASCII Art Banner
const banner = `
${chalk.blue.bold('╔══════════════════════════════════════════════════════════════╗')}
${chalk.blue.bold('║')}                    ${chalk.yellow.bold('Bushi Framework')}                    ${chalk.blue.bold('║')}
${chalk.blue.bold('║')}                  ${chalk.yellow('Build Shit Fast')}                    ${chalk.blue.bold('║')}
${chalk.blue.bold('╚══════════════════════════════════════════════════════════════╝')}
`;

program
  .name('bushi')
  .description('Bushi Framework - Build Shit Fast. A comprehensive framework for solo developers.')
  .version(version, '-v, --version')
  .option('-d, --debug', 'Enable debug mode');

program
  .command('init')
  .description('Initialize Bushi Framework in your current project')
  .action(async () => {
    console.log(banner);
    console.log(chalk.green('🚀 Initializing Bushi Framework...\n'));
    
    try {
      const projectRoot = process.cwd();
      
      // Create .cursor/rules directory
      const cursorRulesDir = path.join(projectRoot, '.cursor', 'rules');
      await fs.ensureDir(cursorRulesDir);
      console.log(chalk.blue('📁 Created .cursor/rules directory'));
      
      // Create .bushi directory
      const bushiDir = path.join(projectRoot, '.bushi');
      await fs.ensureDir(bushiDir);
      console.log(chalk.blue('📁 Created .bushi directory'));
      
      // Copy framework files
      const packageDir = path.dirname(require.main.filename);
      const sourceDir = path.join(packageDir, '..', 'framework');
      
      // Copy Cursor rules
      const rulesSource = path.join(sourceDir, 'rules');
      if (await fs.pathExists(rulesSource)) {
        await fs.copy(rulesSource, cursorRulesDir);
        console.log(chalk.blue('📋 Copied Cursor rules'));
      }
      
      // Copy Bushi framework files
      const bushiSource = path.join(sourceDir, 'bushi');
      if (await fs.pathExists(bushiSource)) {
        await fs.copy(bushiSource, bushiDir);
        console.log(chalk.blue('📋 Copied Bushi framework files'));
      }
      
      console.log(chalk.green('\n✅ Bushi Framework initialized successfully!'));
      console.log(chalk.yellow('\n📚 Available commands:'));
      console.log(chalk.cyan('  /ps  → Product Strategist (business strategy, idea generation)'));
      console.log(chalk.cyan('  /pd  → Product Designer (UX/UI, user research)'));
      console.log(chalk.cyan('  /pb  → Product Builder (technical architecture, development)'));
      console.log(chalk.cyan('  /gh  → Growth Hacker (marketing, customer acquisition)'));
      console.log(chalk.cyan('  /bo  → Business Operations (financial, legal, operations)'));
      console.log(chalk.cyan('  /commands → Quick reference'));
      console.log(chalk.cyan('  /help → Framework overview'));
      
      console.log(chalk.yellow('\n💡 Next steps:'));
      console.log(chalk.white('  1. Open your project in Cursor IDE'));
      console.log(chalk.white('  2. Try /ps to activate the Product Strategist'));
      console.log(chalk.white('  3. Start building your micro-SaaS!'));
      
      console.log(chalk.blue('\n🌐 Learn more: https://github.com/noigllc/bushi'));
      
    } catch (error) {
      console.error(chalk.red('\n❌ Error initializing Bushi Framework:'));
      console.error(chalk.red(error.message));
      process.exit(1);
    }
  });

program
  .command('info')
  .description('Show information about Bushi Framework')
  .action(() => {
    console.log(banner);
    console.log(chalk.blue('📦 Package: bushi'));
    console.log(chalk.blue(`📋 Version: ${version}`));
    console.log(chalk.blue('🏗️  Framework: Bushi - Build Shit Fast'));
    console.log(chalk.blue('🎯 Purpose: Solo developer micro-SaaS framework'));
    console.log(chalk.blue('🔧 Platform: Cursor IDE required'));
    console.log(chalk.blue('🌐 Repository: https://github.com/noigllc/bushi'));
  });

// Handle unknown commands
program.on('command:*', () => {
  console.error(chalk.red(`\n❌ Unknown command: ${program.args.join(' ')}`));
  console.log(chalk.yellow('💡 Use --help for available commands'));
  process.exit(1);
});

// Parse arguments
program.parse();
