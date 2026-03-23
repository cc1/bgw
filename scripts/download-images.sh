#!/bin/bash
# Download all images from Squarespace CDN

cd "$(dirname "$0")/.."

# Profile
curl -sL -o public/images/profile/beth-profile.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/5f407a1d-fd3e-4129-a4e6-d273a4a080ff/IMG_8158.jpeg?format=1500w"
echo "✓ Profile photo"

# Hero images
curl -sL -o public/images/hero/home-hero.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/dcc58bea-5325-42b1-93b4-dc1a7cc22c78/IMG_7322.jpeg?format=1500w"
curl -sL -o public/images/hero/coaching-hero.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/627168c5-4e71-404c-972d-f142b0b4fca6/IMG_3916.jpeg?format=1500w"
curl -sL -o public/images/hero/coaching-secondary.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/d46ea973-2747-4fad-be81-6b47b1bca93b/IMG_4005.jpeg?format=1500w"
curl -sL -o public/images/hero/organizations-hero.jpg "https://images.squarespace-cdn.com/content/v1/624b503beaa0101b5bdb9583/1649102931670-C0F14H54MNTP3X9MBN67/11_09_2018_Textures5847.jpg?format=1500w"
echo "✓ Hero images"

# Research article images
curl -sL -o public/images/articles/conflict-consciousness.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1747264956965-O6JX6VCIKGPG6GCZW37B/IMG_9763.jpeg?format=750w"
curl -sL -o public/images/articles/telepathy-tapes.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1736569132769-RLIDB155FUMP0Z2L0RRL/Dec+Image+copy.jpg?format=750w"
curl -sL -o public/images/articles/jellyfish.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1730411224607-1X2HT5FB8REHMRXQ35AQ/IMG_2892.jpeg?format=750w"
curl -sL -o public/images/articles/trauma.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1720554099734-R08JJA7RFFHJNFPNZJRC/wilhelm-gunkel-toHsK7MKmek-unsplash.jpg?format=750w"
curl -sL -o public/images/articles/phd-update.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1719417919742-ZZF4ZF4UI642AMD6563M/vlad-tchompalov-NpQSAv29evU-unsplash.jpg?format=750w"
curl -sL -o public/images/articles/spaciousness.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1703181962854-5VL2LGIQ63V64N9MRF2U/af946da5-8e89-4439-9723-13fe6a96b715_4000x2672.jpg?format=750w"
curl -sL -o public/images/articles/intention.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1703398963621-JBTDDA9PYW4PSBA8MH65/image-asset.jpeg?format=750w"
curl -sL -o public/images/articles/divine-mundane.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1703398514015-UJWHEZJJXXFYNO5G20JU/astronomy.jpg?format=750w"
curl -sL -o public/images/articles/what-is-intuition.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1703114360276-SD2S3ZESRV8JCP34QND7/IMG_7322.jpeg?format=750w"
curl -sL -o public/images/articles/rediscovery.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1703113542722-KP2OUJURXXT0PRAP4JKH/8739189c-0d25-4819-84fe-a344bc9007e8_3024x4032.jpg?format=750w"
echo "✓ Research article images"

# Organization article images
curl -sL -o public/images/articles/breaking-through.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1703183438635-LCWDJDJMEKLDVUJTVBLR/Final%2Bpic.jpg?format=750w"
curl -sL -o public/images/articles/good-stretch.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1703183765198-3A9ZVGO0W7KV6VEQPIUD/StretchPose.jpg?format=750w"
curl -sL -o public/images/articles/rethink-org-design.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1703274469302-IHGR7QCH1HP9VPUXLKV0/image-asset.jpeg?format=750w"
curl -sL -o public/images/articles/philanthropy-power.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1703182578410-41DADGV4SYBMPZ558T1C/image-asset.jpeg?format=750w"
echo "✓ Organization article images"

# Client logos
curl -sL -o public/images/logos/ignite-philanthropy.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1719252642635-I1GFE6V1OAI4524VQE1K/Ignite_Philanthropy_LOGO_BIG_COLOURS.jpg?format=300w"
curl -sL -o public/images/logos/houssian-foundation.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1719252718050-SPZ34ET39PDEMBXUK6LE/logo-white.42336e4a.jpg?format=300w"
curl -sL -o public/images/logos/project-overzero.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1719253039824-K1APFDC824YG3RNU4NC8/OverZero_logo_RGB__White.jpg?format=300w"
curl -sL -o public/images/logos/sfu.png "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/e6d465f6-3999-431f-83d6-f2d0dc9d0096/SFU%402x.png?format=300w"
curl -sL -o public/images/logos/psfg.png "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/15e6d789-a97a-45f4-be23-4ec67457bae5/PSFG_Logo_Horizontal.png?format=300w"
curl -sL -o public/images/logos/macarthur.png "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/28a43540-2841-4ce4-8f73-d02fd65e6870/download.png?format=300w"
curl -sL -o public/images/logos/oak-foundation.png "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/d586fb9c-4c8d-4fea-a80d-86456e9cc704/download+%281%29.png?format=300w"
echo "✓ Client logos"

# Gallery photos (inspiration page)
curl -sL -o public/images/gallery/krabi-thailand.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/d3224c6b-3f07-4c59-818a-8219bee1c98d/IMG_8209.jpeg?format=1000w"
curl -sL -o public/images/gallery/chiang-dao-thailand-1.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/a95370c2-fc1c-4567-9e06-cb3c92edff3c/IMG_8512.jpeg?format=1000w"
curl -sL -o public/images/gallery/chiang-dao-thailand-2.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/c3e2b02a-38d3-47d1-8c0e-e94789ca7262/IMG_8523.jpeg?format=1000w"
curl -sL -o public/images/gallery/mae-taeng-thailand-1.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/61144355-891c-4c8e-b473-9356d73605a1/IMG_8681.jpeg?format=1000w"
curl -sL -o public/images/gallery/mae-taeng-thailand-2.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1703111772757-XPUZKLFHUAAKTYBNCO95/IMG_8660.jpg?format=1000w"
curl -sL -o public/images/gallery/hue-vietnam.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/1420d2ea-b64b-4c44-888e-93d324ad29f0/IMG_8516.jpeg?format=1000w"
curl -sL -o public/images/gallery/sigiriya-sri-lanka.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/57761724-e8f8-448c-8a21-15005cb268db/IMG_0095.jpeg?format=1000w"
curl -sL -o public/images/gallery/jaffna-sri-lanka.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/013e589a-df31-4e50-8507-997b9c4ae4ac/IMG_1174.jpeg?format=1000w"
curl -sL -o public/images/gallery/florence-italy-1.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/6453d92e-b86a-4626-b146-93058f7bc70c/IMG_2265.jpeg?format=1000w"
curl -sL -o public/images/gallery/florence-italy-2.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/8ac6710d-dfe5-4b6d-8ce7-71e29578193e/IMG_1599.jpeg?format=1000w"
curl -sL -o public/images/gallery/peccioli-italy.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/422082ab-651b-4c28-aeed-5e1b3fc9992a/IMG_2758.jpeg?format=1000w"
curl -sL -o public/images/gallery/rome-italy-1.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/d7e0a75c-956f-40d2-876b-920bcb646afa/IMG_3980.jpeg?format=1000w"
curl -sL -o public/images/gallery/rome-italy-2.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/e4a0f6e0-4992-4491-9c7d-5acb80179879/IMG_4043.jpeg?format=1000w"
curl -sL -o public/images/gallery/orcas-island-usa.jpg "https://images.squarespace-cdn.com/content/v1/65833ed80dabee3c3ed4b1f4/e316efca-4c84-4b05-b7c6-9eb1cb53f343/IMG_4405.jpeg?format=1000w"
echo "✓ Gallery photos"

# Check results
echo ""
echo "Download summary:"
find public/images -type f | wc -l | xargs echo "Total files:"
find public/images -type f -empty | xargs -I{} echo "WARNING: Empty file: {}"
