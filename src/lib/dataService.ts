import { mockLogoDesigns, defaultDesign, LogoDesign } from '@/data/mockData';

/**
 * 根据用户输入的需求文本，匹配最合适的Logo设计方案
 * @param userInput 用户输入的需求描述
 * @returns 匹配的Logo设计方案
 */
export function getLogoDesignByInput(userInput: string): LogoDesign {
  if (!userInput || userInput.trim().length === 0) {
    return defaultDesign;
  }

  const input = userInput.toLowerCase();
  let bestMatch: LogoDesign = defaultDesign;
  let maxScore = 0;

  // 遍历所有设计方案，计算匹配分数
  for (const design of mockLogoDesigns) {
    let score = 0;
    
    // 检查关键词匹配
    for (const keyword of design.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        score += 10; // 关键词匹配得分较高
      }
    }

    // 检查行业匹配
    if (input.includes(design.industry.toLowerCase())) {
      score += 15; // 行业匹配得分最高
    }

    // 检查风格匹配
    if (input.includes(design.style.toLowerCase())) {
      score += 8;
    }

    // 检查颜色匹配
    const colorKeywords = ['蓝色', '红色', '绿色', '金色', '紫色', '橙色', 'blue', 'red', 'green', 'gold', 'purple', 'orange'];
    for (const colorKeyword of colorKeywords) {
      if (input.includes(colorKeyword)) {
        // 检查设计方案是否包含对应颜色
        const hasMatchingColor = design.colors.some(color => {
          if (colorKeyword.includes('蓝') || colorKeyword.includes('blue')) {
            return color.includes('1890ff') || color.includes('blue');
          }
          if (colorKeyword.includes('红') || colorKeyword.includes('red')) {
            return color.includes('ff4d4f') || color.includes('red');
          }
          if (colorKeyword.includes('绿') || colorKeyword.includes('green')) {
            return color.includes('52c41a') || color.includes('green');
          }
          if (colorKeyword.includes('金') || colorKeyword.includes('gold')) {
            return color.includes('faad14') || color.includes('gold');
          }
          if (colorKeyword.includes('紫') || colorKeyword.includes('purple')) {
            return color.includes('722ed1') || color.includes('purple');
          }
          if (colorKeyword.includes('橙') || colorKeyword.includes('orange')) {
            return color.includes('ffa940') || color.includes('orange');
          }
          return false;
        });
        
        if (hasMatchingColor) {
          score += 5;
        }
      }
    }

    // 更新最佳匹配
    if (score > maxScore) {
      maxScore = score;
      bestMatch = design;
    }
  }

  return bestMatch;
}

/**
 * 获取所有可用的Logo设计方案
 * @returns 所有Logo设计方案数组
 */
export function getAllLogoDesigns(): LogoDesign[] {
  return mockLogoDesigns;
}

/**
 * 根据行业筛选Logo设计方案
 * @param industry 行业名称
 * @returns 该行业的Logo设计方案数组
 */
export function getLogoDesignsByIndustry(industry: string): LogoDesign[] {
  return mockLogoDesigns.filter(design => 
    design.industry.toLowerCase().includes(industry.toLowerCase())
  );
}

/**
 * 根据风格筛选Logo设计方案
 * @param style 设计风格
 * @returns 该风格的Logo设计方案数组
 */
export function getLogoDesignsByStyle(style: string): LogoDesign[] {
  return mockLogoDesigns.filter(design => 
    design.style.toLowerCase().includes(style.toLowerCase())
  );
}

/**
 * 获取随机Logo设计方案
 * @returns 随机选择的Logo设计方案
 */
export function getRandomLogoDesign(): LogoDesign {
  const randomIndex = Math.floor(Math.random() * mockLogoDesigns.length);
  return mockLogoDesigns[randomIndex];
}