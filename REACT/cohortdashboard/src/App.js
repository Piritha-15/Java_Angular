import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {

    const cohorts = [

        {
            name: "INTADMDF10 .NET FSD",
            startedOn: "22-Feb-2022",
            status: "ongoing",
            coach: "Mr. John",
            trainer: "Mr. David"
        },

        {
            name: "ADM21JF014 Java FSD",
            startedOn: "10-Sep-2021",
            status: "completed",
            coach: "Ms. Priya",
            trainer: "Mr. Kumar"
        },

        {
            name: "CDBJF21025 Java FSD",
            startedOn: "15-Jan-2022",
            status: "ongoing",
            coach: "Mr. Arun",
            trainer: "Ms. Divya"
        }

    ];

    return (

        <div>

            <h1>My Academy Dashboard</h1>

            {
                cohorts.map((cohort, index) => (

                    <CohortDetails
                        key={index}
                        cohort={cohort}
                    />

                ))
            }

        </div>

    );

}

export default App;