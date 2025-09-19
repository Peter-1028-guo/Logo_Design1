'use client';

import { message } from 'antd';
import LogoEditor from '@/components/LogoEditor';

export default function EditorPage() {
  const handleSave = () => {
    message.success('Logo已保存！');
  };

  const handleExport = () => {
    message.success('Logo导出成功！');
  };

  return (
    <div>
      <LogoEditor onSave={handleSave} onExport={handleExport} />
    </div>
  );
}