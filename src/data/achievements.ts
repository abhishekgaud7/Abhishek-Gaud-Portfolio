import { Achievement } from '../types';

export const achievementsData: Achievement[] = [
    {
        title: 'Smart Street-Light Sensor',
        context: 'Electronics Incubation Program · College Innovation Lab',
        takeaway: 'Designed a dusk-to-dawn controller that auto-dims during low traffic, pairing LDR-based sensing with low-power relays.',
        meta: 'Rapid prototype · PCB routing · Power budget testing'
    },
    {
        title: 'Water Flow Alarm System',
        context: 'Incubation Cohort Build Sprint',
        takeaway: 'Built a flow-activated buzzer using ultrasonic sensing + Arduino, providing early alerts for storage overflow and leaks.',
        meta: 'IoT · Sensor fusion · Field calibration'
    },
    {
        title: 'Drone Assembly & Flight Lab',
        context: 'E-Robotics Lab Initiative',
        takeaway: 'Collaborated on a quadcopter rig—frame balancing, ESC tuning, PID calibration, and safety checklists for live demos.',
        meta: 'Robotics · RC systems · Team mentoring'
    },
    {
        title: 'Electronics & Robotics Certifications',
        context: 'Multiple campus hackathons and lab programs',
        takeaway: 'Earned certifications across embedded systems, robotics, and incubation challenges showcasing iterative prototyping.',
        meta: 'Certificates available on request'
    }
];
