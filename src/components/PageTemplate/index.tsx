import React, { memo, ReactNode } from "react";
import Head from "next/head";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

// ヘッダータイトルをページにより指定
const headerTitle = (path: string): string => {
  switch (path) {
    case "/":
      return "シャッフル";
    case "/topics-page":
      return "トピック一覧";
    default:
      return "トピックる";
  }
};

// ページのベースとなるテンプレートコンポーネント
export const PageTemplate: React.VFC<Props> = memo((props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{headerTitle(router.pathname)}</title>
      </Head>
      <Header title={headerTitle(router.pathname)} />
      <div className="flex-grow overflow-y-scroll">{props.children}</div>
      <Footer />
    </div>
  );
});
