import { Component, signal, ChangeDetectorRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {

  // constructor(private cdr: ChangeDetectorRef) {}

  modules = [
    {
      id: 1,
      icon: 'image/modules-icon/employee.svg',
      title: 'Employee Records',
      image: 'image/modules/emplyoee-records.png',
      description: 'Manage employee information, profiles and records in one place.',
      details: [
        'Personal and employment details',
        'Documents and qualification tracking',
        'Department, designation and branch information', 'Reporting manager assignment',
        'Bulk Excel upload and updates', 'Complete history retained even after deactivation',
      ]
    },
    {
      id: 2,
      icon: 'image/modules-icon/attendance.svg',
      title: 'Attendance & Shifts',
      image: 'image/modules/emplyoee-records.png',
      description: 'Track employee attendance, working hours and shift schedules.',
      details: [
        'Biometric & GPS attendance',
        'Shift and roaster management',
        'Night-shift support',
        'Late arrival & overtime tracking',
        'Attendance reminders',
        'Shift-change approvals',
        'Attendance & adherence reports'
      ]
    },
    {
      id: 3,
      icon: 'image/modules-icon/leave.svg',
      title: 'Leave Management',
      image: 'image/modules/leave-management.png',
      description: 'Manage leave and flexible work requests with connected approvals, balances and payroll.',
      details: [
        'Leave balance & accrual tracking',
        'Comp-off approval & expiry reminders',
        'Work-from-home requests',
        'Short leave / permission tracking',
        'Complete leave ledger'
      ]
    },
    {
      id: 4,
      icon: 'image/modules-icon/payroll.svg',
      title: 'Payroll & Compliance',
      image: 'image/modules/payroll.png',
      description: 'Manage salary structures, payroll calculations, deductions, arrears and employee payouts through one connected system.',
      details: [
        'Attendance-driven payroll',
        'PF, ESI, PT, LWF & TDS deductions',
        'Leave, overtime & Loss of Pay integration',
        'Payroll review & approval',
        'Finance worksheet exchange',
        'Arrears & salary revisions',
        'Loans, advances & incentives'
      ]
    },
    {
      id: 5,
      icon: 'image/modules-icon/assets.svg',
      title: 'Asset Management',
      image: 'image/modules/performance.png',
      description: 'Manage company assets from allocation to recovery with complete tracking and accountability.',
      details: [
        'Centralised asset records',
        'Employee asset allocation',
        'Return and condition tracking',
        'Digital acknowledgement',
        'Complete custody history',
        'Exit clearance and asset recovery'
      ]
    },
    {
      id: 6,
      icon: 'image/modules-icon/analytics.svg',
      title: 'Analytics & Reporting',
      image: 'image/modules/performance.png',
      description: 'Get a complete view of your workforce with dedicated dashboards, actionable insights and detailed reports.',
      details: [
        'HR & management dashboards',
        'Attendance and workforce analytics',
        'Performance and training insights',
        'Payroll readiness monitoring',
        'Recruitment and attrition analysis',
        'Pending actions and alerts',
        'Module utilisation tracking',
        'Comprehensive Excel data exports'
      ]
    },
    {
      id: 7,
      icon: 'image/modules-icon/employee-experience.svg',
      title: 'Employee Experience',
      image: 'image/modules/performance.png',
      description: 'Empower employees with self-service tools, mobile access and seamless workplace communication.',
      details: [
        'Employee self-service portal',
        'Branded Android & iOS apps', 'Attendance, leave & payslip access'
        , 'Announcements & circulars',
        'Employee satisfaction surveys',
        'mart notifications & reminders',
        'Training, appraisal & document access',
        'Confidential grievance submission'
      ]
    },
    {
      id: 8,
      icon: 'image/modules-icon/exit.svg',
      title: 'Compliance & Exit',
      image: 'image/modules/performance.png',
      description: 'Manage workplace incidents, employee grievances and separation processes through one connected platform.',
      details: [
        'Incident reporting & resolution',
        'Automatic incident escalation',
        'Grievance & POSH management',
        'Statutory committee records',
        'Confidential complaint handling',
        'Resignation & notice period tracking',
        'Department clearance & asset recovery',
        'Exit interviews & final settlement',
        'Relieving & experience letters'
      ]
    },
    {
      id: 9,
      icon: 'image/modules-icon/recruit.svg',
      title: 'Recruitment & Onboarding',
      image: 'image/modules/performance.png',
      description: 'Manage recruitment, interviews, offers and internships from one platform.',
      details: [
        'Manpower requisition & approvals',
        'Candidate tracking',
        'Online screening tests',
        'Interview scheduling',
        'Panel evaluation & feedback',
        'Candidate offer portal',
        'Background verification',
        'Referral tracking',
        'Internship lifecycle & stipend management'
      ]
    },

    {
      id: 10,
      icon: 'image/modules-icon/automation.svg',
      title: 'Automation & Integrations',
      image: 'image/modules/performance.png',
      description: 'Automate everyday HR tasks, reduce manual follow-ups and connect your essential business tools.',
      details: [
        'Automated attendance synchronisation',
        'Leave accrual and rollover',
        'Appraisal and survey scheduling',
        'Attendance and comp-off reminders',
        'Interview and task follow-ups',
        'Incident escalation and security alerts',
        'Biometric, SMS, email and Google Meet integrations',
        'Excel data exchange and reporting',
        'On-premises or cloud deployment'
      ]
    },
    {
      id: 11,
      icon: 'image/modules-icon/develop.svg',
      title: 'Performance & Development',
      image: 'image/modules/performance.png',
      description: 'Manage employee performance, appraisals, improvement plans and training through one connected system.',
      details: [
        'Department performance scorecards',
        'Multi-reviewer assessments',
        'Automatic appraisal cycles',
        'Managerial appraisals',
        'Performance Improvement Plans',
        'Weekly ratings & task tracking',
        'Training management',
        'Online tests & skill evaluations'
      ]
    },
  ];

  // Initially show the first card's details
  selectedModule = this.modules[0];

  selectModule(module: any) {
    this.selectedModule = module;
  }

  goToAssessment() {
    console.log("clciked");
    // for opening in different tab
    window.open('https://inventionminds.com/hr-assessment', '_blank', 'noopener,noreferrer');
  }

  callUs() {
    console.log("clciked");

    window.location.href = 'tel:+916361980139';
  }

  // for counting numbers

  count1 = signal(0);
  count2 = signal(0);
  count3 = signal(0);
  count4 = signal(0);
  count5 = signal(0);

  constructor() {
    setTimeout(() => {
      this.startCounter();
    }, 500);
  }

  startCounter(): void {

    const interval = setInterval(() => {

      if (this.count1() < 45) {
        this.count1.update(value => value + 1);
      }

      if (this.count2() < 7) {
        this.count2.update(value => value + 1);
      }

      if (this.count3() < 3) {
        this.count3.update(value => value + 1);
      }

      if (this.count4() < 2) {
        this.count4.update(value => value + 1);
      }

      if (this.count5() < 20) {
        this.count5.update(value => value + 1);
      }

      if (
        this.count1() === 45 &&
        this.count2() === 7 &&
        this.count3() === 3 &&
        this.count4() === 2 &&
        this.count5() === 20
      ) {
        clearInterval(interval);
      }

    }, 100);
  }

}

