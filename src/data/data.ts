import GoogleIcon from "@/assets/google.svg";
import AppleIcon from "@/assets/apple.svg";
import MetaIcon from "@/assets/meta.svg";
import TeslaIcon from "@/assets/tesla.svg";
import MicrosoftIcon from "@/assets/microsoft.svg";
import SequoiaIcon from "@/assets/sequoia.svg";
import IbmIcon from "@/assets/ibm.svg";
import GrammarlyIcon from "@/assets/grammarly.svg";
import SkypeIcon from "@/assets/skype.svg";
import Skyscanner from "@/assets/skyscanner.svg";
import PinterestIcon from "@/assets/pinterest.svg";
import TalisIcon from "@/assets/talis.svg";
import YounitedIcon from "@/assets/younited.svg";
import AppleLightIcon from '@/assets/apple-light.svg'
import MicrosoftLightIcon from '@/assets/microsoft-light.svg'
import TeslaLightIcon from '@/assets/tesla-light.svg'
import MetaLightIcon from '@/assets/meta-light.svg'

import GrammarlyLightIcon from "@/assets/grammarly-light.svg";
import GoogleLightIcon from "@/assets/google-light.svg";
import SequoiaLightIcon from "@/assets/sequoia-light.svg";
import RipplingIcon from "@/assets/rippling.svg";
import YounitedLightIcon from "@/assets/younited-light.svg";


import T1 from "@/assets/t1.webp";
import T2 from "@/assets/t2.webp";
import T3 from "@/assets/t3.webp";
import T4 from "@/assets/t4.webp";
import T5 from "@/assets/t5.webp";

import EricIcon from '@/assets/eric-feunteun.webp'
import LaStampaIcon from '@/assets/la-stampa.webp'
import LaRepublicaIcon from '@/assets/la-republia.svg'
import StampIcon from '@/assets/stamp-icon.webp'

import Eric from '@/assets/eric-feunteun.webp'
import LaStampa from '@/assets/la-stampa-img.webp'
import LaRepublica from '@/assets/la-repubblica.webp'
import Stamp from '@/assets/commune-di-genova.webp'

export const icons = [
    GoogleIcon,
    AppleIcon,
    MetaIcon,
    TeslaIcon,
    MicrosoftIcon,
    SequoiaIcon,
    IbmIcon,
    GrammarlyIcon,
    SkypeIcon,
    Skyscanner,
    PinterestIcon,
    TalisIcon,
    YounitedIcon,
];

export const experts = [
    {
        img: T1,
        orgIcon: GrammarlyLightIcon,
        name: "Bei Zhang",
        intro: "Head of Marketing Analytics at Grammarly ($13 bln valuation)",
    },
    {
        img: T2,
        orgIcon: GoogleLightIcon,
        name: "Alessandro Cannas",
        intro: "Product Manager at Gemini (Google) (1.65 trillion valuation)",
    },
    {
        img: T3,
        orgIcon: SequoiaLightIcon,
        name: "Douglas Leone",
        intro: "Global Managing Partner at Sequoia ($88 bln under m.)",
    },
    {
        img: T4,
        orgIcon: RipplingIcon,
        name: "Prasanna Sankar",
        intro: "Co-Founder at Rippling.com ($11.3 bln valuation)",
    },
    {
        img: T5,
        orgIcon: YounitedLightIcon,
        name: "Francois de Bodinat",
        intro: "Chief Product Officer at Younited ($1.3 bln valuation)",
    },
];

export const mediaTalks = [
    {
        logo: EricIcon,
        link: "/",
        title: "Eric Feunteun",
        img: Eric,
        desc: "Real an amazing discovery today in my mentoring session in Genoa Entrepreneurship School,"
    },
    {
        logo: LaStampaIcon,
        link: "/",
        title: "La Stampa",
        img: LaStampa,
        desc: "Studiare e lavorare, a Genova e Washington il master congiunto in Startup Creation..."
    },
    {
        logo: LaRepublicaIcon,
        link: "/",
        title: "La Republica",
        img: LaRepublica,
        desc: "Studiare e lavorare, a Genova e Washington il master congiunto in Startup Creation..."
    },
    {
        logo: StampIcon,
        link: "/",
        title: "Stamp",
        img: Stamp,
        desc: "Studiare e lavorare, a Genova e Washington il master congiunto in Startup Creation..."
    },
    {
        logo: LaStampa,
        link: "/",
        title: "La Stampa",
        img: LaStampa,
        desc: "Studiare e lavorare, a Genova e Washington il master congiunto in Startup Creation..."
    },
]

export const sponsors = [
    SequoiaIcon,
    AppleIcon,
    MicrosoftIcon,
    MetaIcon,
    GoogleIcon,
    TeslaIcon,
];

export const sponsorsLight = [
    SequoiaLightIcon,
    AppleLightIcon,
    MicrosoftLightIcon,
    MetaLightIcon,
    GoogleLightIcon,
    TeslaLightIcon
]


export const faqData: { question: string, answer: string }[] = [
    {
        question: "Do I need to have a startup idea?",
        answer: "No, most of our students join without an idea. In the first two weeks of the program the mentors explore real problems that can help you find the idea you love. For the program you don't necessarily have to participate with your own project but you can also join a friend's project."
    },
    {
        question: "What are the admission requirements?",
        answer: "Bachelor's Degree; English proficiency - IELTS 7 Academic or equivalent; Minimum 1 month of internship experience."
    },
    {
        question: "What degree is obtained upon the completion of the program?",
        answer: "You will obtain a Master’s of 60 ECTs from the University of Genoa and a certificate of modules completion from Georgetown University."
    },
    {
        question: "How can I apply?",
        answer: "To apply, start by filling out the free application form. Our committee of mentors will review your profile. If you pass, we'll invite you to a call to delve deeper into your aspirations and see if you are a good fit for the program. At the end of each calendar month, we send the admission results to applicants' email inboxes."
    },
    {
        question: "What is the duration of the program?",
        answer: "The program lasts 8 months, full-time, on campus."
    },
    {
        question: "What is the tuition fees for the program?",
        answer: "The tuition for academics is €23,000."
    },
    {
        question: "Does GenoaES offer scholarships?",
        answer: "Yes, scholarships are available. Contact to the admissions team via admission@genoaes.com for more information."
    }
]