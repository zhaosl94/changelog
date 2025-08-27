import React from 'react';
import { classNames } from 'lib/utils';
import { BoardingPass } from 'components/core/footer/boarding-pass';

type FooterProps = {
  hideCTA?: boolean;
  className?: string;
};

export const Footer = ({ hideCTA = false, className = '' }: FooterProps) => {
  return (
    <div className="z-50 w-full max-w-full overflow-x-hidden overflow-y-hidden">
      <div className={classNames('flex flex-col items-center mt-[64px] lg:mt-40 font-hero', className)}>
        <div className="flex flex-col items-center">
          <BoardingPass hideCTA={hideCTA} />
        </div>
        <div className="w-full bg-gradient-to-t from-[#f8f9fa] to-white">
          <div className="max-w-6xl mx-auto px-8 py-16">
            {/* Footer内容区域 */}
            {/* 底部分割线和版权信息 */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-6 mb-4 md:mb-0">
                  <div className="text-gray-900 font-bold text-xl">数数科技</div>
                  <span className="text-gray-600">全球先进的游戏大数据分析服务商</span>
                </div>
                
                <div className="flex items-center space-x-6">
                  <a href="https://www.thinkingdata.cn/privacy" className="text-gray-600 hover:text-primary">隐私政策</a>
                  <a href="https://www.thinkingdata.cn/terms" className="text-gray-600 hover:text-primary">服务条款</a>
                  <a href="https://www.thinkingdata.cn/security" className="text-gray-600 hover:text-primary">安全中心</a>
                </div>
              </div>
              
              <div className="mt-4 text-center text-gray-500 text-sm">
                © 2025 数数科技(ThinkingData). 保留所有权利. | 沪ICP备12345678号
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
