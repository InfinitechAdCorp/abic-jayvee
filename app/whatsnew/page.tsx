"use client";
import {
  Tabs,
  Tab,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useState } from "react";

import ContactSection from "../home/contactsection";

import TestemonialSection from "./testemonial";
import SeminarSection from "./seminarsection";
import MeetingSection from "./meetingsection";
import EventSection from "./eventsection";
import CloseDeals from "./closedeals";
import NewsSection from "./news";
import TipsSection from "./tips";
import ConstructionSection from "./construction";


const whatsnewData = [
  {
    key: 1,
    title: "Testemonial",
    content: <TestemonialSection />,
  },
  {
    key: 2,
    title: "Seminars",
    content: <SeminarSection />,
  },
  {
    key: 3,
    title: "Meetings",
    content: <MeetingSection />,
  },
  {
    key: 4,
    title: "Events",
    content: <EventSection />,
  },
  {
    key: 5,
    title: "Closed Deals",
    content: <CloseDeals />,
  },
  {
    key: 6,
    title: "Real Estate News",
    content: <NewsSection />,
  },
  {
    key: 7,
    title: "Real Estate Tips",
    content: <TipsSection />,
  },
  {
    key: 8,
    title: "On-Going Infastructure",
    content: <ConstructionSection />,
  },
];

export default function WhatsNewPage() {
  const [selectedTab, setSelectedTab] = useState<number>(whatsnewData[0].key);

  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto px-6">
        <div className="flex w-full flex-col">
          {/* Tabs for larger screens */}
          <div className="hidden md:block">
            <Tabs
              aria-label="Options"
              selectedKey={selectedTab.toString()}
              onSelectionChange={(key) => setSelectedTab(Number(key))}
            >
              {whatsnewData.map((data) => (
                <Tab key={data.key} title={data.title}>
                  {data.content}
                </Tab>
              ))}
            </Tabs>
          </div>

          {/* Dropdown for smaller screens */}
          <div className="md:hidden w-full">
            <Dropdown>
              <DropdownTrigger>
                <Button className="w-full" variant="bordered">
                  Choose a Section
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Tabs Dropdown"
                onAction={(key) => setSelectedTab(Number(key))}
              >
                {whatsnewData.map((data) => (
                  <DropdownItem key={data.key}>{data.title}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <div className="mt-4 w-full">
              {whatsnewData.find((data) => data.key === selectedTab)?.content}
            </div>
          </div>
        </div>

        <ContactSection />
      </div>
    </section>
  );
}
