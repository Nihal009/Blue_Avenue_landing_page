const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../attached_assets/generated_images');

async function optimizeImages() {
    if (!fs.existsSync(ASSETS_DIR)) {
        console.error(`Directory not found: ${ASSETS_DIR}`);
        process.exit(1);
    }

    const files = fs.readdirSync(ASSETS_DIR).filter(file => file.endsWith('.png'));

    console.log(`Found ${files.length} PNG images to optimize...`);

    for (const file of files) {
        const inputPath = path.join(ASSETS_DIR, file);
        const outputPath = path.join(ASSETS_DIR, file.replace('.png', '.webp'));

        try {
            const stats = fs.statSync(inputPath);
            console.log(`Optimizing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);

            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);

            const newStats = fs.statSync(outputPath);
            console.log(`✅ Generated ${path.basename(outputPath)} (${(newStats.size / 1024).toFixed(2)} KB)`);
            console.log(`   Saved ${(100 * (1 - newStats.size / stats.size)).toFixed(1)}% space\n`);
        } catch (error) {
            console.error(`❌ Failed to optimize ${file}:`, error);
        }
    }
}

optimizeImages();
