export type Question = {
  id: number;
  text: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
};

export const questions: Question[] = [
  {
    id: 1,
    text: "According to the rules of defining medical words, which is the correct order to translate a term?",
    options: [
      { id: "A", text: "Prefix, then Root, then Suffix" },
      { id: "B", text: "Root, then Prefix, then Suffix" },
      { id: "C", text: "Suffix, then Prefix, then Root" },
      { id: "D", text: "Suffix, then Root, then Prefix" }
    ],
    correctAnswer: "C"
  },
  {
    id: 2,
    text: "A patient is diagnosed with \"polyneuropathy\". Based on the word parts, what does this literally mean?",
    options: [
      { id: "A", text: "A disease of a single nerve" },
      { id: "B", text: "A disease of many nerves" },
      { id: "C", text: "Inflammation of many nerves" },
      { id: "D", text: "Paralysis of the nervous system" }
    ],
    correctAnswer: "B"
  },
  {
    id: 3,
    text: "What is the precise definition of the term \"Multipara\" as described in the text?",
    options: [
      { id: "A", text: "A woman who gives birth to multiple babies at the exact same time." },
      { id: "B", text: "A condition involving multiple birth defects." },
      { id: "C", text: "A woman who has had more than one child, but not necessarily at the same time." },
      { id: "D", text: "A surgical procedure for multiple births." }
    ],
    correctAnswer: "C"
  },
  {
    id: 4,
    text: "If \"plegia\" means paralysis, what is the correct term for \"paralysis of the heart\"?",
    options: [
      { id: "A", text: "Cardiopathy" },
      { id: "B", text: "Carditis" },
      { id: "C", text: "Neurocardiac" },
      { id: "D", text: "Cardioplegia" }
    ],
    correctAnswer: "D"
  },
  {
    id: 5,
    text: "Which two prefixes have the exact same meaning (meaning \"half\")?",
    options: [
      { id: "A", text: "Hemi- and Semi-" },
      { id: "B", text: "Hemi- and Bi-" },
      { id: "C", text: "Poly- and Multi-" },
      { id: "D", text: "Intra- and Inter-" }
    ],
    correctAnswer: "A"
  },
  {
    id: 6,
    text: "You are reading a patient's chart and see the word \"Hemigastrectomy\". What procedure did the patient undergo?",
    options: [
      { id: "A", text: "Surgical removal of the entire stomach" },
      { id: "B", text: "Surgical removal of half of the stomach" },
      { id: "C", text: "Inflammation of half of the stomach" },
      { id: "D", text: "Surgical removal of half of the kidney" }
    ],
    correctAnswer: "B"
  },
  {
    id: 7,
    text: "\"Intervertebral disks\" refers to the disks:",
    options: [
      { id: "A", text: "Inside a single vertebra" },
      { id: "B", text: "Between the vertebrae" },
      { id: "C", text: "Above the vertebrae" },
      { id: "D", text: "Below the vertebrae" }
    ],
    correctAnswer: "B"
  },
  {
    id: 8,
    text: "What is the fundamental difference between the prefixes \"Intra-\" and \"Inter-\"?",
    options: [
      { id: "A", text: "Intra- means below; Inter- means above" },
      { id: "B", text: "Intra- means between; Inter- means within" },
      { id: "C", text: "Intra- means within; Inter- means between" },
      { id: "D", text: "Intra- means before; Inter- means after" }
    ],
    correctAnswer: "C"
  },
  {
    id: 9,
    text: "A physician who specializes in diseases of the blood is called a:",
    options: [
      { id: "A", text: "Dermatologist" },
      { id: "B", text: "Nephrologist" },
      { id: "C", text: "Oncologist" },
      { id: "D", text: "Hematologist" }
    ],
    correctAnswer: "D"
  },
  {
    id: 10,
    text: "\"Andropathy\" is best defined as:",
    options: [
      { id: "A", text: "A disease of the joints" },
      { id: "B", text: "Any disease that only men have" },
      { id: "C", text: "A person without sexual characteristics of a man or a woman" },
      { id: "D", text: "A disease of the human mind" }
    ],
    correctAnswer: "B"
  },
  {
    id: 11,
    text: "Which term literally translates to \"surgical removal of one kidney\"?",
    options: [
      { id: "A", text: "Nephrectomy" },
      { id: "B", text: "Heminephrectomy" },
      { id: "C", text: "Cardionephric" },
      { id: "D", text: "Nephritis" }
    ],
    correctAnswer: "B"
  },
  {
    id: 12,
    text: "If a patient is receiving an \"intravenous\" injection, where is the medicine going?",
    options: [
      { id: "A", text: "Between the veins" },
      { id: "B", text: "Within a muscle" },
      { id: "C", text: "Within a vein" },
      { id: "D", text: "Under the skin" }
    ],
    correctAnswer: "C"
  },
  {
    id: 13,
    text: "What does the term \"Polypathia\" mean?",
    options: [
      { id: "A", text: "Excessive fear of many things" },
      { id: "B", text: "Inflammation of more than one joint" },
      { id: "C", text: "Several diseases in one person at one time" },
      { id: "D", text: "Paralysis of more than one muscle" }
    ],
    correctAnswer: "C"
  },
  {
    id: 14,
    text: "If \"iatr/o\" means physician, and \"ped/o\" refers to children, what is a \"Pediatrician\"?",
    options: [
      { id: "A", text: "A child with a disease" },
      { id: "B", text: "A doctor for children" },
      { id: "C", text: "A doctor who studies the mind of a child" },
      { id: "D", text: "An expert in foot diseases" }
    ],
    correctAnswer: "B"
  },
  {
    id: 15,
    text: "A patient suffering from a \"Subfebrile\" condition has:",
    options: [
      { id: "A", text: "A high fever" },
      { id: "B", text: "No fever" },
      { id: "C", text: "A fever that comes after an infection" },
      { id: "D", text: "A low fever" }
    ],
    correctAnswer: "D"
  },
  {
    id: 16,
    text: "Which directional term means \"Toward the midline\"?",
    options: [
      { id: "A", text: "Lateral" },
      { id: "B", text: "Anterior" },
      { id: "C", text: "Medial" },
      { id: "D", text: "Inferior" }
    ],
    correctAnswer: "C"
  },
  {
    id: 17,
    text: "\"Neuroophthalmology\" is the study of:",
    options: [
      { id: "A", text: "Diseases of the nervous system and the mind" },
      { id: "B", text: "The nerves of the eyes" },
      { id: "C", text: "Tumors of the eye" },
      { id: "D", text: "Paralysis of the eye muscles" }
    ],
    correctAnswer: "B"
  },
  {
    id: 18,
    text: "What is the correct breakdown of the word \"Perineuritis\"?",
    options: [
      { id: "A", text: "peri (before) + neur (nerve) + itis (disease)" },
      { id: "B", text: "peri (around) + neur (nerve) + itis (inflammation)" },
      { id: "C", text: "peri (within) + neur (mind) + itis (pain)" },
      { id: "D", text: "peri (many) + neur (nerve) + itis (surgical removal)" }
    ],
    correctAnswer: "B"
  },
  {
    id: 19,
    text: "Which term describes a condition of \"being without sexual characteristics of a man or a woman\"?",
    options: [
      { id: "A", text: "Andropathy" },
      { id: "B", text: "Gynecopathy" },
      { id: "C", text: "Androgynous" },
      { id: "D", text: "Subdermal" }
    ],
    correctAnswer: "C"
  },
  {
    id: 20,
    text: "If \"audio\" means hearing, what does an \"Audiologist\" do?",
    options: [
      { id: "A", text: "Treats diseases of the ear" },
      { id: "B", text: "Performs surgery on the ear" },
      { id: "C", text: "Is a specialist in hearing / measures hearing" },
      { id: "D", text: "Treats throat and ear infections" }
    ],
    correctAnswer: "C"
  },
  {
    id: 21,
    text: "\"Quadriplegia\" is defined as:",
    options: [
      { id: "A", text: "Inflammation of four joints" },
      { id: "B", text: "Paralysis of all four limbs (both arms and both legs)" },
      { id: "C", text: "Having four babies at once" },
      { id: "D", text: "Paralysis on one side of the body" }
    ],
    correctAnswer: "B"
  },
  {
    id: 22,
    text: "According to the text, what is the literal breakdown of the word \"Disease\"?",
    options: [
      { id: "A", text: "dis (pain) + ease (comfort)" },
      { id: "B", text: "dis (not / free of) + ease (ease) = lack of ease" },
      { id: "C", text: "di (two) + sease (sickness)" },
      { id: "D", text: "dis (against) + ease (bacteria)" }
    ],
    correctAnswer: "B"
  },
  {
    id: 23,
    text: "\"Dermatitis\" means:",
    options: [
      { id: "A", text: "Disease of the skin" },
      { id: "B", text: "Specialist of the skin" },
      { id: "C", text: "Inflammation of the skin" },
      { id: "D", text: "Beneath the skin" }
    ],
    correctAnswer: "C"
  },
  {
    id: 24,
    text: "The medical term for \"Heatstroke\" based on its word parts is:",
    options: [
      { id: "A", text: "Thermoplegia" },
      { id: "B", text: "Polyphobia" },
      { id: "C", text: "Intrafebrile" },
      { id: "D", text: "Postfebrile" }
    ],
    correctAnswer: "A"
  },
  {
    id: 25,
    text: "What does the term \"Subabdominal\" mean?",
    options: [
      { id: "A", text: "Within the abdomen" },
      { id: "B", text: "Above the belly" },
      { id: "C", text: "Below the abdomen" },
      { id: "D", text: "Inflammation of the abdomen" }
    ],
    correctAnswer: "C"
  },
  {
    id: 26,
    text: "If a medication must be taken \"under the tongue,\" the medical term for this administration is:",
    options: [
      { id: "A", text: "Subdermal" },
      { id: "B", text: "Hemilingual" },
      { id: "C", text: "Dentilingual" },
      { id: "D", text: "Sublingual" }
    ],
    correctAnswer: "D"
  },
  {
    id: 27,
    text: "\"Ophthalmoneuritis\" specifically refers to:",
    options: [
      { id: "A", text: "Disease of the eye and mind" },
      { id: "B", text: "Inflammation of the optic nerve (the nerve to the eye)" },
      { id: "C", text: "Instrument to measure different parts of the eye" },
      { id: "D", text: "Inflammation of the eye only" }
    ],
    correctAnswer: "B"
  },
  {
    id: 28,
    text: "\"Postpartum\" refers to:",
    options: [
      { id: "A", text: "Occurring before childbirth" },
      { id: "B", text: "A disease peculiar to the female reproductive system" },
      { id: "C", text: "Occurring after childbirth (refers to the mother)" },
      { id: "D", text: "Inflammation after a fever" }
    ],
    correctAnswer: "C"
  },
  {
    id: 29,
    text: "What is the meaning of the prefix \"Brady-\"?",
    options: [
      { id: "A", text: "Fast" },
      { id: "B", text: "Excessive" },
      { id: "C", text: "Slow" },
      { id: "D", text: "Below" }
    ],
    correctAnswer: "C"
  },
  {
    id: 30,
    text: "An \"Oncologist\" is a physician who specializes in:",
    options: [
      { id: "A", text: "The elderly" },
      { id: "B", text: "Kidneys" },
      { id: "C", text: "The mind" },
      { id: "D", text: "Tumors or cancer" }
    ],
    correctAnswer: "D"
  },
  {
    id: 31,
    text: "\"Gastrocardiac\" means having to do with:",
    options: [
      { id: "A", text: "The stomach and the nerves" },
      { id: "B", text: "The stomach and the heart" },
      { id: "C", text: "The heart and the kidneys" },
      { id: "D", text: "Inflammation of the stomach" }
    ],
    correctAnswer: "B"
  },
  {
    id: 32,
    text: "Which suffix indicates \"Surgical removal\"?",
    options: [
      { id: "A", text: "-itis" },
      { id: "B", text: "-algia" },
      { id: "C", text: "-logy" },
      { id: "D", text: "-ectomy" }
    ],
    correctAnswer: "D"
  },
  {
    id: 33,
    text: "The term for \"excessive fear of many things\" is:",
    options: [
      { id: "A", text: "Polypathia" },
      { id: "B", text: "Polyplegia" },
      { id: "C", text: "Polyphobia" },
      { id: "D", text: "Psychopathology" }
    ],
    correctAnswer: "C"
  },
  {
    id: 34,
    text: "A doctor who specializes in mental disorders is a \"Psychiatrist\". What are the word parts?",
    options: [
      { id: "A", text: "psych (nerve) + iatrist (expert)" },
      { id: "B", text: "psych (mind) + iatrist (physician)" },
      { id: "C", text: "psych (brain) + iatrist (study of)" },
      { id: "D", text: "psych (head) + iatrist (treatment)" }
    ],
    correctAnswer: "B"
  },
  {
    id: 35,
    text: "\"Cardioneural\" refers to:",
    options: [
      { id: "A", text: "Disease of the heart muscle" },
      { id: "B", text: "Inflammation of the heart" },
      { id: "C", text: "Having to do with the nervous control of the heart" },
      { id: "D", text: "Nerves supplying the stomach" }
    ],
    correctAnswer: "C"
  },
  {
    id: 36,
    text: "If a patient requires an instrument to measure different parts of the eye, the doctor will use an:",
    options: [
      { id: "A", text: "Ophthalmometer" },
      { id: "B", text: "Audiometer" },
      { id: "C", text: "Ophthalmitis" },
      { id: "D", text: "Optic nerve" }
    ],
    correctAnswer: "A"
  },
  {
    id: 37,
    text: "\"Prevertebral\" means:",
    options: [
      { id: "A", text: "Surgical removal of a vertebra" },
      { id: "B", text: "In front of a vertebra (before the bone)" },
      { id: "C", text: "Between the vertebrae" },
      { id: "D", text: "A disease of the spine" }
    ],
    correctAnswer: "B"
  },
  {
    id: 38,
    text: "The prefix \"Anti-\" means:",
    options: [
      { id: "A", text: "After" },
      { id: "B", text: "Before" },
      { id: "C", text: "Against" },
      { id: "D", text: "Without" }
    ],
    correctAnswer: "C"
  },
  {
    id: 39,
    text: "\"Hemilingual\" means:",
    options: [
      { id: "A", text: "Pertaining to the teeth and tongue" },
      { id: "B", text: "Affecting or having to do with one half of the tongue" },
      { id: "C", text: "Under the tongue" },
      { id: "D", text: "Paralysis of the tongue" }
    ],
    correctAnswer: "B"
  },
  {
    id: 40,
    text: "What is the medical term for \"a period of time after neuritis\"?",
    options: [
      { id: "A", text: "Postfebrile" },
      { id: "B", text: "Preneuritic" },
      { id: "C", text: "Postneuritic" },
      { id: "D", text: "Polyneuritis" }
    ],
    correctAnswer: "C"
  },
  {
    id: 41,
    text: "The combining form \"nephr/o\" relates to the:",
    options: [
      { id: "A", text: "Nervous system" },
      { id: "B", text: "Kidneys" },
      { id: "C", text: "Liver" },
      { id: "D", text: "Skin" }
    ],
    correctAnswer: "B"
  },
  {
    id: 42,
    text: "Which term means \"surgical removal of an intervertebral disk\"?",
    options: [
      { id: "A", text: "Vertebrectomy" },
      { id: "B", text: "Diskitis" },
      { id: "C", text: "Diskectomy" },
      { id: "D", text: "Hemivertebra" }
    ],
    correctAnswer: "C"
  },
  {
    id: 43,
    text: "\"Gynecopathy\" refers to:",
    options: [
      { id: "A", text: "Any disease that only men have" },
      { id: "B", text: "Diseases peculiar to the female reproductive system" },
      { id: "C", text: "Inflammation of the female reproductive system" },
      { id: "D", text: "A specialist in women's health" }
    ],
    correctAnswer: "B"
  },
  {
    id: 44,
    text: "According to directional terms, \"Posterior\" is also known as:",
    options: [
      { id: "A", text: "Ventral" },
      { id: "B", text: "Superior" },
      { id: "C", text: "Dorsal" },
      { id: "D", text: "Anterior" }
    ],
    correctAnswer: "C"
  },
  {
    id: 45,
    text: "\"Antiarthritic\" translates literally to:",
    options: [
      { id: "A", text: "Causing inflammation of the joints" },
      { id: "B", text: "Anything used to relieve arthritis (against joint inflammation)" },
      { id: "C", text: "A specialist in joint diseases" },
      { id: "D", text: "Paralysis of multiple joints" }
    ],
    correctAnswer: "B"
  },
  {
    id: 46,
    text: "What does \"Intragastric\" mean?",
    options: [
      { id: "A", text: "Between the stomach and intestines" },
      { id: "B", text: "Within the belly" },
      { id: "C", text: "Within the stomach" },
      { id: "D", text: "Below the stomach" }
    ],
    correctAnswer: "C"
  },
  {
    id: 47,
    text: "A \"Pathologist\" is a specialist who:",
    options: [
      { id: "A", text: "Treats mental diseases" },
      { id: "B", text: "Studies diseases in the body" },
      { id: "C", text: "Performs surgery on tumors" },
      { id: "D", text: "Specializes in children's medicine" }
    ],
    correctAnswer: "B"
  },
  {
    id: 48,
    text: "What is the literal meaning of \"Neuropsychopathy\"?",
    options: [
      { id: "A", text: "Inflammation of the nerves and the mind" },
      { id: "B", text: "Disease of the nerves combined with a mental disorder" },
      { id: "C", text: "A physician who specializes in nervous breakdowns" },
      { id: "D", text: "Paralysis of the mind" }
    ],
    correctAnswer: "B"
  },
  {
    id: 49,
    text: "A condition where a person is \"born with only half of a vertebra\" is called:",
    options: [
      { id: "A", text: "Hemiplegia" },
      { id: "B", text: "Semicircular" },
      { id: "C", text: "Intervertebral" },
      { id: "D", text: "Hemivertebra" }
    ],
    correctAnswer: "D"
  },
  {
    id: 50,
    text: "What is the purpose of adding a vowel (usually 'o') to a root word to make a combining form?",
    options: [
      { id: "A", text: "To change the meaning of the root" },
      { id: "B", text: "To make the word plural" },
      { id: "C", text: "To make words easier to pronounce" },
      { id: "D", text: "To turn a noun into an adjective" }
    ],
    correctAnswer: "C"
  }
];
