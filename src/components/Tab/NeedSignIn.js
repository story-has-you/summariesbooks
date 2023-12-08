import Link from 'next/link';
import ChatContainer from '../ChatWithBook/ChatContainer';
export default ({ messages }) => {
  return (
    <>
      <div className="flex flex-col h-[70vh] md:h-[700px] border custom-orange-50 rounded-lg mt-5">
        <div className="flex-grow overflow-auto p-4 relative">
          <ChatContainer messages={messages} sending={false} />

          {/* 高斯模糊背景 */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30" />

          {/* 登录按钮 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="btn btn-neutral text-white">
              <Link href={'/signin'} target='_blank'> Not logged in, please log in first, click to signin</Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

