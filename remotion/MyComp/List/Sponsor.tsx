import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import React from "react";
import sponsorData from "../../Data/sponsorData";
import { AbsoluteFill, Img } from "remotion";

const SponsorItem = ({
  title,
  items,
  style = "large",
}: {
  title: string;
  items: { title: string; image: string }[];
  style?: "large" | "mini";
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        justifyContent: "center",
        alignItems: "center",
        width: "1920px",
        padding: "24px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: "bold",
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px 36px",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {items.map((x, i) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width:
                style === "large"
                  ? "calc(450px + 24px * 2)"
                  : "calc(300px + 24px * 2)",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "24px",
                padding: "24px",
              }}
            >
              <Img
                src={
                  x.image.startsWith("https")
                    ? x.image
                    : `https://sitcon.org/2024/sponsor/${x.image}`
                }
                style={{
                  width: style === "large" ? "450px" : "300px",
                  height: style === "large" ? "300px" : "200px",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />{" "}
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 16,
              }}
            >
              {x.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Sponsor = () => {
  return (
    <AbsoluteFill
      style={{
        boxSizing: "border-box",
      }}
    >
      <TransitionSeries>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence
          durationInFrames={300}
          style={{ margin: "24px" }}
        >
          <SponsorItem
            title="主辦單位"
            items={[
              {
                title: "SITCON 學生計算機年會籌備團隊",
                image: "https://sitcon.org/2024/website/SITCON_green.svg",
              },
            ]}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence
          durationInFrames={300}
          style={{ margin: "24px" }}
        >
          <SponsorItem title="共同主辦" items={sponsorData.coOrganizer} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence
          durationInFrames={300}
          style={{ margin: "24px" }}
        >
          <SponsorItem title="協辦單位" items={sponsorData.coSponsor} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence
          durationInFrames={300}
          style={{ margin: "24px" }}
        >
          <SponsorItem title="領航級" items={sponsorData.sponsors[0].items} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence
          durationInFrames={300}
          style={{ margin: "24px" }}
        >
          <SponsorItem title="深耕級" items={sponsorData.sponsors[1].items} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence
          durationInFrames={300}
          style={{ margin: "24px" }}
        >
          <SponsorItem
            title="前瞻級"
            items={sponsorData.sponsors[2].items}
            style="mini"
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence
          durationInFrames={300}
          style={{ margin: "24px" }}
        >
          <SponsorItem
            title="新芽級"
            items={sponsorData.sponsors[3].items}
            style="mini"
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence
          durationInFrames={300}
          style={{ margin: "24px" }}
        >
          <SponsorItem title="特別感謝" items={sponsorData.specialThanks} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence
          durationInFrames={300}
          style={{ margin: "24px" }}
        >
          <SponsorItem title="媒體夥伴" items={sponsorData.mediaPartners} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />
      </TransitionSeries>
    </AbsoluteFill>
  );
};