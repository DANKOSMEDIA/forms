'use client';

import React from "react";

export default function Page() {

    React.useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://paperform.co/__embed.min.js";
        document.body.appendChild(script);
    }, []);

    return (
        <div
            data-paperform-id="guardians-digital-ambassador-onboarding-form"
            data-spinner={1}
        />
    )
}