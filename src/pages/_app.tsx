import '@/styles/globals.scss'
import { useState } from "react";
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Content } from "@/components/layout/content";
import { Header } from "@/components/layout/header";
import { Layout } from "@/components/layout/layout";
import { Sidebar } from "@/components/layout/sidebar";
import { SidebarContext } from "@/hooks/sidebar";
import { sidebarGroups } from "@/utils/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarContext.Provider
        value={{
          sidebarOpen,
          toggleSidebarOpen: () => setSidebarOpen(open => !open)
        }}
      >
        <Head>
          <title>Storyteller CMS</title>
        </Head>

        <div role="application">
          <Header />

          <Layout>
            <Sidebar groups={sidebarGroups} />

            <Content>
              <Component {...pageProps} />
            </Content>
          </Layout>
        </div>
      </SidebarContext.Provider>
    </QueryClientProvider>
  )
}
