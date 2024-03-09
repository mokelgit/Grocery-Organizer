import { useState } from "react";
import Topbar from "../layout/Topbar";
import Sidebar from "../layout/Sidebar";
import Content from "../layout/Content";

function Layout() {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-screen text-black">
      <div className="min-w-full min-h-[10%]">
        <Topbar
          openSections={openSections}
          setOpenSections={setOpenSections}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
      </div>
      <div className="flex min-h-[90%] min-w-full">
        <div className="min-w-[90%] min-h-full border-black border-t-2 border-r-2 ">
          <Content
            openSections={openSections}
            setOpenSections={setOpenSections}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        </div>
        <div className="min-w-[10%] min-h-full border-black border-t-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Layout;
