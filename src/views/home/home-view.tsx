"use client";

import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";

import ScrollProgress from "~/components/scroll-progress";
import MainLayout from "~/layouts/main";
import { HomeMinimal } from "./minimal";
import { useLocales, useTranslate } from "~/locales";
import { allLangs } from "~/locales";
import { FormControlLabel, Radio } from "@mui/material";

export const HomeView = () => {
  const { scrollYProgress } = useScroll();
  const { t, onChangeLang } = useTranslate();
  const { currentLang } = useLocales();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        {mounted && t("home.demo")}
        <RadioGroup
          row
          value={currentLang!.value}
          onChange={(event) => onChangeLang(event.target.value)}
        >
          {allLangs.map((lang) => (
            <FormControlLabel
              key={lang.label}
              value={lang.value}
              label={lang.label}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </Box>
    </MainLayout>
  );
};
