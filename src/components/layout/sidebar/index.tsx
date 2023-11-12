import React from "react";
import cn from 'classnames';
import { useSidebar } from "@/hooks/sidebar";
import { SidebarGroup } from "@/types/sidebar";

import styles from './sidebar.module.scss';
import Image from "next/image";
import Link from "next/link";

interface Props {
  groups: SidebarGroup[];
}

export const Sidebar: React.FC<Props> = ({ groups }) => {
  const { sidebarOpen } = useSidebar();

  const selectedItemId = 'stories'; // Pretend we're getting this from the path

  return (
    <>
      {sidebarOpen && <div className={styles.backdrop} />}

      <ul
        className={cn(styles.sidebar, {
          [styles.hidden]: !sidebarOpen
        })}
      >
        {groups.map((group, index) => (
          <React.Fragment key={index}>
            <div className={cn(styles.divider, { [styles['top-divider']]: index === 0 })} />

            {group.items.map(({ id, iconPath, title }) => (
              <Link key={id} href="#">
                <li className={cn({ [styles.selected]: id === selectedItemId })}>
                  <Image src={iconPath} alt={title} width={20} height={18} />
                  <span>{title}</span>
                </li>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </>
  )
}
