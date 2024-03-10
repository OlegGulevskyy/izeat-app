"use client";

import { useScroll } from "framer-motion";
import Box from "@mui/material/Box";

import ScrollProgress from "~/components/scroll-progress";
import MainLayout from "~/layouts/main";
import { HomeMinimal } from "./minimal";

export const HomeView = () => {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          bgcolor: "background.default",
        }}
      >
        <HomeMinimal />
      </Box>
    </MainLayout>
  );
};
