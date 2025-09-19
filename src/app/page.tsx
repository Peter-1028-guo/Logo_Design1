'use client';

import { useState, useEffect } from 'react';
import { Layout, Typography, Row, Col, Input, Tabs, Card, Button, Space, Image } from 'antd';
import { FileTextOutlined, PictureOutlined, SendOutlined } from '@ant-design/icons';
import { getLogoDesignByInput } from '@/lib/dataService';

const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [activeTab, setActiveTab] = useState('text');
  const [textResult, setTextResult] = useState('这里将显示生成的文本结果...');
  const [imageResult, setImageResult] = useState('');

  // 监听Tab键切换
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && !event.shiftKey) {
        event.preventDefault();
        setActiveTab(prev => prev === 'text' ? 'image' : 'text');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleGenerate = () => {
    if (!userInput.trim()) return;
    
    // 使用数据服务获取匹配的设计方案
    const matchedDesign = getLogoDesignByInput(userInput);
    
    // 设置文本结果
    setTextResult(matchedDesign.textResult);
    
    // 设置图像结果（SVG格式）
    const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(matchedDesign.svgLogo)}`;
    setImageResult(svgDataUrl);
  };

  const tabItems = [
    {
      key: 'text',
      label: (
        <span>
          <FileTextOutlined />
          文本结果
        </span>
      ),
      children: (
        <Card className="h-full min-h-96">
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
            {textResult}
          </div>
        </Card>
      ),
    },
    {
      key: 'image',
      label: (
        <span>
          <PictureOutlined />
          图像结果
        </span>
      ),
      children: (
        <Card className="h-full min-h-96 flex items-center justify-center">
          {imageResult ? (
            <Image
              src={imageResult}
              alt="Generated Logo"
              className="max-w-full max-h-full"
              fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
            />
          ) : (
            <div className="text-center text-gray-400">
              <PictureOutlined className="text-6xl mb-4" />
              <Text className="text-lg">图像结果将在这里显示</Text>
            </div>
          )}
        </Card>
      ),
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          <Title level={3} className="!mb-0 !text-blue-600">
            Logo Design1
          </Title>
          <Space>
            <Text className="text-gray-500">按 Tab 键切换显示模式</Text>
          </Space>
        </div>
      </Header>

      <Content className="bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <Row gutter={24} className="h-full">
            {/* 左侧输入区域 */}
            <Col xs={24} lg={10} className="mb-6 lg:mb-0">
              <Card 
                title="输入您的Logo设计需求" 
                className="h-full"
                extra={
                  <Button 
                    type="primary" 
                    icon={<SendOutlined />}
                    onClick={handleGenerate}
                    disabled={!userInput.trim()}
                  >
                    生成
                  </Button>
                }
              >
                <Space direction="vertical" className="w-full" size="large">
                  <div>
                    <Paragraph className="text-gray-600 mb-4">
                      请详细描述您想要的Logo设计，包括：
                    </Paragraph>
                    <ul className="text-gray-500 text-sm mb-4 pl-4">
                      <li>• 公司或品牌名称</li>
                      <li>• 行业类型</li>
                      <li>• 设计风格偏好</li>
                      <li>• 颜色要求</li>
                      <li>• 其他特殊要求</li>
                    </ul>
                  </div>
                  
                  <TextArea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="例如：我需要为一家科技公司设计Logo，公司名称是'TechFlow'，希望设计风格现代简洁，主色调使用蓝色，体现科技感和专业性..."
                    rows={12}
                    className="resize-none"
                  />
                  
                  <div className="text-right">
                    <Text className="text-gray-400 text-sm">
                      {userInput.length} 字符
                    </Text>
                  </div>
                </Space>
              </Card>
            </Col>

            {/* 右侧结果显示区域 */}
            <Col xs={24} lg={14}>
              <Card 
                title="设计结果" 
                className="h-full"
                extra={
                  <Text className="text-gray-500 text-sm">
                    当前显示: {activeTab === 'text' ? '文本' : '图像'}
                  </Text>
                }
              >
                <Tabs
                  activeKey={activeTab}
                  onChange={setActiveTab}
                  items={tabItems}
                  className="h-full"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}
