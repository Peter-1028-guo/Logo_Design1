export interface LogoDesign {
  id: string;
  keywords: string[];
  industry: string;
  style: string;
  colors: string[];
  textResult: string;
  svgLogo: string;
  imageUrl?: string;
}

export const mockLogoDesigns: LogoDesign[] = [
  {
    id: 'tech-modern-blue',
    keywords: ['科技', '技术', '软件', '互联网', '现代', '简洁', '蓝色'],
    industry: '科技',
    style: '现代简约',
    colors: ['#1890ff', '#ffffff'],
    textResult: `基于您的科技公司需求，我们为您设计了现代简约风格的Logo方案：

🎨 设计理念：
• 体现科技感和创新精神
• 简洁现代的视觉语言
• 专业可信赖的品牌形象

🎯 设计元素：
• 主色调：科技蓝 (#1890ff)
• 辅助色：纯白 (#ffffff)
• 字体：无衬线现代字体
• 图形：几何抽象元素

📐 技术规格：
• 标准尺寸：300x300px
• 最小使用尺寸：48x48px
• 文件格式：SVG, PNG, PDF
• 色彩模式：RGB/CMYK

💼 应用场景：
• 网站Logo和favicon
• 名片和信纸
• 产品包装
• 数字媒体广告`,
    svgLogo: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#f8f9fa" rx="20"/>
  <circle cx="100" cy="80" r="25" fill="#1890ff"/>
  <rect x="75" y="120" width="50" height="8" fill="#1890ff" rx="4"/>
  <rect x="85" y="135" width="30" height="6" fill="#52c41a" rx="3"/>
  <text x="100" y="170" text-anchor="middle" fill="#1890ff" font-family="Arial, sans-serif" font-size="16" font-weight="bold">TechFlow</text>
</svg>`
  },
  {
    id: 'restaurant-warm-red',
    keywords: ['餐饮', '美食', '餐厅', '咖啡', '温馨', '红色', '橙色'],
    industry: '餐饮',
    style: '温馨亲和',
    colors: ['#ff4d4f', '#ffa940'],
    textResult: `为您的餐饮品牌设计了温馨亲和的Logo方案：

🍽️ 设计理念：
• 传达美食的温暖与美味
• 营造家的温馨感受
• 吸引顾客的食欲和情感共鸣

🎨 视觉元素：
• 主色调：温暖红 (#ff4d4f)
• 辅助色：活力橙 (#ffa940)
• 字体：圆润友好字体
• 图形：食物相关图标

📏 尺寸规范：
• 标准版：300x300px
• 横版招牌：600x200px
• 小尺寸应用：64x64px
• 单色版本：黑白可用

🏪 使用场景：
• 店面招牌和门头
• 菜单和宣传单
• 外卖包装盒
• 社交媒体头像`,
    svgLogo: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#fff2e8" rx="20"/>
  <circle cx="100" cy="70" r="20" fill="#ff4d4f"/>
  <path d="M80 90 Q100 110 120 90" stroke="#ffa940" stroke-width="4" fill="none"/>
  <rect x="90" y="100" width="20" height="30" fill="#ff4d4f" rx="10"/>
  <text x="100" y="150" text-anchor="middle" fill="#ff4d4f" font-family="Arial, sans-serif" font-size="14" font-weight="bold">美味餐厅</text>
  <text x="100" y="170" text-anchor="middle" fill="#ffa940" font-family="Arial, sans-serif" font-size="10">Delicious</text>
</svg>`
  },
  {
    id: 'education-friendly-green',
    keywords: ['教育', '学校', '培训', '学习', '友好', '绿色', '成长'],
    industry: '教育',
    style: '友好专业',
    colors: ['#52c41a', '#1890ff'],
    textResult: `为您的教育机构设计了友好专业的Logo方案：

📚 设计理念：
• 体现知识的力量和成长
• 传达专业可信的教育品质
• 营造友好亲近的学习氛围

🌱 设计特色：
• 主色调：成长绿 (#52c41a)
• 辅助色：智慧蓝 (#1890ff)
• 字体：清晰易读字体
• 图形：教育成长元素

📖 规格说明：
• 主要尺寸：300x300px
• 应用最小尺寸：60x60px
• 支持格式：矢量SVG优先
• 背景适应：深浅色背景

🎓 应用范围：
• 学校标识和证书
• 教材和学习资料
• 网站和移动应用
• 宣传海报和广告`,
    svgLogo: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#f6ffed" rx="20"/>
  <path d="M100 50 L120 70 L100 90 L80 70 Z" fill="#52c41a"/>
  <circle cx="100" cy="110" r="15" fill="#1890ff"/>
  <rect x="85" y="130" width="30" height="4" fill="#52c41a" rx="2"/>
  <rect x="90" y="140" width="20" height="3" fill="#1890ff" rx="1.5"/>
  <text x="100" y="165" text-anchor="middle" fill="#52c41a" font-family="Arial, sans-serif" font-size="14" font-weight="bold">智慧教育</text>
  <text x="100" y="180" text-anchor="middle" fill="#1890ff" font-family="Arial, sans-serif" font-size="10">Smart Education</text>
</svg>`
  },
  {
    id: 'medical-trust-blue',
    keywords: ['医疗', '健康', '医院', '诊所', '专业', '蓝色', '信任'],
    industry: '医疗',
    style: '专业可信',
    colors: ['#1890ff', '#52c41a'],
    textResult: `为您的医疗机构设计了专业可信的Logo方案：

⚕️ 设计理念：
• 传达专业医疗服务品质
• 建立患者信任和安全感
• 体现关爱生命的使命

💙 视觉策略：
• 主色调：医疗蓝 (#1890ff)
• 辅助色：健康绿 (#52c41a)
• 字体：专业严谨字体
• 图形：医疗健康符号

🏥 技术参数：
• 标准规格：300x300px
• 最小应用：48x48px
• 文件类型：SVG/PNG/EPS
• 单色版本：深蓝色

🩺 使用场景：
• 医院标识和指示牌
• 医疗设备和用品
• 处方单和病历
• 官方网站和APP`,
    svgLogo: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#f0f8ff" rx="20"/>
  <circle cx="100" cy="100" r="40" fill="none" stroke="#1890ff" stroke-width="3"/>
  <rect x="95" y="80" width="10" height="40" fill="#1890ff" rx="2"/>
  <rect x="80" y="95" width="40" height="10" fill="#1890ff" rx="2"/>
  <circle cx="100" cy="100" r="8" fill="#52c41a"/>
  <text x="100" y="160" text-anchor="middle" fill="#1890ff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">康复医疗</text>
  <text x="100" y="175" text-anchor="middle" fill="#52c41a" font-family="Arial, sans-serif" font-size="10">Health Care</text>
</svg>`
  },
  {
    id: 'finance-stable-gold',
    keywords: ['金融', '银行', '投资', '理财', '稳重', '金色', '专业'],
    industry: '金融',
    style: '稳重专业',
    colors: ['#faad14', '#1890ff'],
    textResult: `为您的金融机构设计了稳重专业的Logo方案：

💰 设计理念：
• 体现财富增值和稳健经营
• 传达专业可靠的金融服务
• 建立客户信任和品牌权威

🏛️ 设计元素：
• 主色调：财富金 (#faad14)
• 辅助色：信任蓝 (#1890ff)
• 字体：稳重商务字体
• 图形：金融投资符号

💎 规格标准：
• 主要尺寸：300x300px
• 最小使用：50x50px
• 格式支持：矢量优先
• 印刷适配：CMYK色彩

🏦 应用领域：
• 银行网点和ATM
• 金融产品宣传
• 官方文件和合同
• 数字平台界面`,
    svgLogo: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#fffbe6" rx="20"/>
  <polygon points="100,60 120,80 120,120 80,120 80,80" fill="#faad14"/>
  <rect x="85" y="125" width="30" height="8" fill="#1890ff" rx="4"/>
  <circle cx="100" cy="90" r="8" fill="#1890ff"/>
  <path d="M90 100 Q100 110 110 100" stroke="#faad14" stroke-width="2" fill="none"/>
  <text x="100" y="155" text-anchor="middle" fill="#faad14" font-family="Arial, sans-serif" font-size="14" font-weight="bold">金融投资</text>
  <text x="100" y="170" text-anchor="middle" fill="#1890ff" font-family="Arial, sans-serif" font-size="10">Finance</text>
</svg>`
  },
  {
    id: 'creative-colorful-purple',
    keywords: ['创意', '设计', '艺术', '创作', '多彩', '紫色', '个性'],
    industry: '创意设计',
    style: '创意个性',
    colors: ['#722ed1', '#ff4d4f', '#52c41a'],
    textResult: `为您的创意设计工作室设计了个性化Logo方案：

🎨 设计理念：
• 展现无限创意和想象力
• 体现艺术设计的专业水准
• 传达独特个性和创新精神

🌈 视觉特色：
• 主色调：创意紫 (#722ed1)
• 辅助色：活力红 (#ff4d4f)
• 点缀色：灵感绿 (#52c41a)
• 字体：现代创意字体

✨ 设计规范：
• 标准尺寸：300x300px
• 灵活应用：可适配各种尺寸
• 色彩丰富：支持渐变效果
• 创意变化：可衍生多种版本

🎭 适用场景：
• 工作室标识和名片
• 作品集和展示
• 社交媒体和网站
• 创意产品包装`,
    svgLogo: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#f9f0ff" rx="20"/>
  <circle cx="80" cy="80" r="15" fill="#722ed1"/>
  <circle cx="120" cy="80" r="12" fill="#ff4d4f"/>
  <circle cx="100" cy="110" r="18" fill="#52c41a"/>
  <path d="M70 120 Q100 140 130 120" stroke="#722ed1" stroke-width="3" fill="none"/>
  <text x="100" y="160" text-anchor="middle" fill="#722ed1" font-family="Arial, sans-serif" font-size="14" font-weight="bold">创意工作室</text>
  <text x="100" y="175" text-anchor="middle" fill="#ff4d4f" font-family="Arial, sans-serif" font-size="10">Creative Studio</text>
</svg>`
  }
];

export const defaultDesign: LogoDesign = {
  id: 'default-general',
  keywords: ['通用', '默认', '简约'],
  industry: '通用',
  style: '简约现代',
  colors: ['#1890ff', '#ffffff'],
  textResult: `为您设计了通用简约的Logo方案：

🎯 设计理念：
• 简洁明了的视觉表达
• 适用于多种行业场景
• 专业可信的品牌形象

🎨 设计特点：
• 主色调：经典蓝 (#1890ff)
• 辅助色：纯净白 (#ffffff)
• 字体：现代无衬线字体
• 风格：简约现代

📐 技术规格：
• 标准尺寸：300x300px
• 最小使用：48x48px
• 文件格式：SVG, PNG
• 适配性：各种背景

💼 应用建议：
• 企业标识和名片
• 网站和移动应用
• 文档和宣传材料
• 产品包装设计`,
  svgLogo: `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#fafafa" rx="20"/>
  <circle cx="100" cy="100" r="30" fill="none" stroke="#1890ff" stroke-width="4"/>
  <circle cx="100" cy="100" r="10" fill="#1890ff"/>
  <text x="100" y="150" text-anchor="middle" fill="#1890ff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">您的品牌</text>
  <text x="100" y="165" text-anchor="middle" fill="#666" font-family="Arial, sans-serif" font-size="10">Your Brand</text>
</svg>`
};