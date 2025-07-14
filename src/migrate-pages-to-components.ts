// ✅ CommonJS 版本，兼容 ts-node 默认配置
const fs = require('fs')
const path = require('path')

const pagesDir = path.join(__dirname, 'app', 'Pages')
const targetDir = path.join(__dirname, 'app', 'components')

function toPascalCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1) + 'Panel'
}

function migrate() {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  const subDirs: string[] = fs.readdirSync(pagesDir)

  subDirs.forEach((folder: string) => {
    const pagePath = path.join(pagesDir, folder, 'page.tsx')
    if (fs.existsSync(pagePath)) {
      const newFileName = toPascalCase(folder) + '.tsx'
      const targetPath = path.join(targetDir, newFileName)

      fs.renameSync(pagePath, targetPath)
      console.log(`✅ Moved: ${folder}/page.tsx → components/${newFileName}`)
    } else {
      console.log(`❌ Skipped: ${folder}/page.tsx not found`)
    }
  })

  console.log('✅ All migrations complete.')
}

migrate()
