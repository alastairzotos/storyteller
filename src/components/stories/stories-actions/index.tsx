import React from "react";
import Image from "next/image";
import { Button } from "@/components/lib/button";
import { Input } from "@/components/lib/inputs/input";
import { Select } from "@/components/lib/inputs/select";
import { NewStoryButton } from "@/components/stories/new-story-button";

import styles from './stories-actions.module.scss';

export const StoriesActions: React.FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.filters}>
        <Input
          placeholder="Search"
          adornment={(
            <Button variant="adornment">
              <Image src="/icons/search.png" width={12} height={12} alt="Search" />
            </Button>
          )}
        />

        <Select>
          <option>All Statuses</option>
          <option>Draft</option>
          <option>Scheduled</option>
          <option>Live</option>
          <option>Past</option>
        </Select>

        <span className="hide-tablet">Showing 1 to 20 of 176</span>
      </div>

      <div className="hide-tablet">
        <NewStoryButton />
      </div>
    </div>
  )
}
