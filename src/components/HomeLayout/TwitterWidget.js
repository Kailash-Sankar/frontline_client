import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterWidget = () => {
  return (
    <div>
      <h2 className="appeals-header">Twitter Feed</h2>
      <div className="twitter-embed marquee">
        <div className="appeals-data">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="DHFWKA"
            options={{
              tweetLimit: "10",
              width: "100%",
              height: "100%",
            }}
            theme="dark"
            noHeader="true"
            noBorders="true"
            noFooter="true"
          ></TwitterTimelineEmbed>
        </div>
      </div>
    </div>
  );
};

export default TwitterWidget;
