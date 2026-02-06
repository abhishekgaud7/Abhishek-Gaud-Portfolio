import React from 'react';

export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    github?: string;
    image: string;
}

export interface Achievement {
    title: string;
    context: string;
    takeaway: string;
    meta: string;
    date?: string;
}



export interface EducationItem {
    period: string;
    school: string;
    qualification: string;
    location: string;
    details: string[];
    meta?: React.ReactNode | string;
}

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    contributions: string[];
}

export interface Skill {
    category: string;
    description?: string;
    items: string[];
}
