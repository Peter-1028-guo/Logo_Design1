'use client';

import { useState } from 'react';
import { Card, Row, Col, Button, Space, Typography, Slider, ColorPicker, Input, Select } from 'antd';
import { DownloadOutlined, SaveOutlined, UndoOutlined, RedoOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

interface LogoEditorProps {
  onSave?: () => void;
  onExport?: () => void;
}

export default function LogoEditor({ onSave, onExport }: LogoEditorProps) {
  const [logoText, setLogoText] = useState('Your Logo');
  const [fontSize, setFontSize] = useState(48);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [textColor, setTextColor] = useState('#1890ff');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const fontOptions = [
    'Arial',
    'Helvetica',
    'Times New Roman',
    'Georgia',
    'Verdana',
    'Courier New',
    'Impact',
    'Comic Sans MS'
  ];

  return (
    <div className="h-screen flex">
      {/* Left Panel - Tools */}
      <div className="w-80 bg-white border-r border-gray-200 p-4 overflow-y-auto">
        <Title level={4} className="mb-6">设计工具</Title>
        
        {/* Text Settings */}
        <Card title="文本设置" className="mb-4">
          <Space direction="vertical" className="w-full">
            <div>
              <Text className="block mb-2">Logo文本</Text>
              <Input 
                value={logoText}
                onChange={(e) => setLogoText(e.target.value)}
                placeholder="输入Logo文本"
              />
            </div>
            
            <div>
              <Text className="block mb-2">字体</Text>
              <Select 
                value={fontFamily}
                onChange={setFontFamily}
                className="w-full"
              >
                {fontOptions.map(font => (
                  <Option key={font} value={font}>{font}</Option>
                ))}
              </Select>
            </div>
            
            <div>
              <Text className="block mb-2">字体大小: {fontSize}px</Text>
              <Slider
                min={12}
                max={120}
                value={fontSize}
                onChange={setFontSize}
              />
            </div>
            
            <div>
              <Text className="block mb-2">文字颜色</Text>
              <ColorPicker
                value={textColor}
                onChange={(color) => setTextColor(color.toHexString())}
                showText
              />
            </div>
          </Space>
        </Card>

        {/* Background Settings */}
        <Card title="背景设置" className="mb-4">
          <div>
            <Text className="block mb-2">背景颜色</Text>
            <ColorPicker
              value={backgroundColor}
              onChange={(color) => setBackgroundColor(color.toHexString())}
              showText
            />
          </div>
        </Card>

        {/* Actions */}
        <Card title="操作" className="mb-4">
          <Space direction="vertical" className="w-full">
            <Button icon={<UndoOutlined />} className="w-full">
              撤销
            </Button>
            <Button icon={<RedoOutlined />} className="w-full">
              重做
            </Button>
            <Button type="primary" icon={<SaveOutlined />} onClick={onSave} className="w-full">
              保存
            </Button>
            <Button icon={<DownloadOutlined />} onClick={onExport} className="w-full">
              导出
            </Button>
          </Space>
        </Card>
      </div>

      {/* Right Panel - Canvas */}
      <div className="flex-1 bg-gray-100 p-8">
        <div className="h-full flex items-center justify-center">
          <div 
            className="bg-white shadow-lg rounded-lg p-12 min-w-96 min-h-96 flex items-center justify-center"
            style={{ backgroundColor }}
          >
            <div
              style={{
                fontSize: `${fontSize}px`,
                fontFamily,
                color: textColor,
                fontWeight: 'bold',
                textAlign: 'center',
                userSelect: 'none'
              }}
            >
              {logoText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}