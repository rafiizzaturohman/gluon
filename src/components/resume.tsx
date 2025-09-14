import { BookIcon } from "@/app/icons";

const educationData = [
  {
    title: "Yadika Soreang Vocational School",
    period: "2019 — 2022",
    description:
      "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
  },
  {
    title: "Rubicamp",
    period: "Oct 2022 — Dec 2022",
    description:
      "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..",
  },
  {
    title: "STMIK Mardira Indonesia",
    period: "2025 — Now",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
  },
];

const MyResume = () => {
  return (
    <section className="content-card">
      <div>
        {educationData.map((eduItem, index) => (
          <div key={index}>
            <h6>{eduItem.title}</h6>
            <p className="text-amber-500">{eduItem.period}</p>
            <p>{eduItem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyResume;
