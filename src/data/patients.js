// Rich mock patient data for CarePortal demo
// Demonstrates realistic healthcare data scenarios

export const patients = [
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: 'SC',
    dob: '1985-03-15',
    age: 39,
    gender: 'Female',
    bloodType: 'A+',
    phone: '(555) 234-5678',
    email: 'sarah.chen@email.com',
    address: '142 Oak Street, San Francisco, CA 94102',
    emergencyContact: { name: 'Michael Chen', relation: 'Spouse', phone: '(555) 234-5679' },
    insurance: { provider: 'Blue Shield', policyNumber: 'BS-789456123', group: 'GRP-2024' },
    primaryCare: 'Dr. Amanda Foster',
    allergies: ['Penicillin', 'Sulfa drugs'],
    medications: [
      { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', purpose: 'Diabetes management' },
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', purpose: 'Blood pressure' }
    ],
    conditions: ['Type 2 Diabetes', 'Hypertension'],
    vitals: {
      current: { bp: '128/82', heartRate: 72, temperature: 98.4, weight: 145, height: 64 },
      history: [
        { date: '2024-11-15', bp: '128/82', heartRate: 72, weight: 145 },
        { date: '2024-10-18', bp: '132/85', heartRate: 75, weight: 147 },
        { date: '2024-09-20', bp: '135/88', heartRate: 78, weight: 149 },
        { date: '2024-08-22', bp: '138/90', heartRate: 80, weight: 152 },
        { date: '2024-07-25', bp: '142/92', heartRate: 82, weight: 155 },
        { date: '2024-06-27', bp: '145/94', heartRate: 84, weight: 158 }
      ]
    },
    labResults: [
      { date: '2024-11-10', test: 'HbA1c', value: '6.8%', status: 'borderline', reference: '< 5.7%' },
      { date: '2024-11-10', test: 'Fasting Glucose', value: '118 mg/dL', status: 'elevated', reference: '< 100 mg/dL' },
      { date: '2024-11-10', test: 'LDL Cholesterol', value: '95 mg/dL', status: 'normal', reference: '< 100 mg/dL' },
      { date: '2024-11-10', test: 'HDL Cholesterol', value: '58 mg/dL', status: 'normal', reference: '> 50 mg/dL' },
      { date: '2024-08-15', test: 'HbA1c', value: '7.2%', status: 'elevated', reference: '< 5.7%' }
    ],
    timeline: [
      { date: '2024-11-15', type: 'visit', title: 'Follow-up Visit', doctor: 'Dr. Amanda Foster', notes: 'BP improving with medication adjustment. Continue current regimen.', category: 'primary-care' },
      { date: '2024-11-10', type: 'lab', title: 'Quarterly Lab Work', doctor: 'Quest Diagnostics', notes: 'HbA1c improved from 7.2% to 6.8%. Continue diabetes management.', category: 'lab' },
      { date: '2024-10-18', type: 'visit', title: 'Diabetes Management', doctor: 'Dr. Amanda Foster', notes: 'Increased Metformin dosage. Diet counseling provided.', category: 'primary-care' },
      { date: '2024-09-05', type: 'specialist', title: 'Cardiology Consult', doctor: 'Dr. Robert Kim', notes: 'EKG normal. Continue hypertension management with current medications.', category: 'cardiology' },
      { date: '2024-08-22', type: 'visit', title: 'Routine Checkup', doctor: 'Dr. Amanda Foster', notes: 'Weight loss recommended. Referred to nutritionist.', category: 'primary-care' },
      { date: '2024-07-10', type: 'procedure', title: 'Annual Eye Exam', doctor: 'Dr. Lisa Park', notes: 'No diabetic retinopathy detected. Continue annual monitoring.', category: 'ophthalmology' }
    ],
    riskScore: 35,
    riskFactors: ['Diabetes', 'Hypertension', 'Family history of heart disease'],
    aiInsights: [
      { type: 'positive', text: 'Blood pressure trending down 12% over 6 months with current treatment.' },
      { type: 'positive', text: 'HbA1c improved from 7.2% to 6.8% - diabetes management effective.' },
      { type: 'recommendation', text: 'Consider scheduling podiatry visit - diabetic foot exam overdue.' },
      { type: 'alert', text: 'Weight loss of 10 lbs achieved - encourage continued lifestyle modifications.' }
    ]
  },
  {
    id: 2,
    name: 'James Wilson',
    avatar: 'JW',
    dob: '1958-09-22',
    age: 66,
    gender: 'Male',
    bloodType: 'O-',
    phone: '(555) 345-6789',
    email: 'j.wilson@email.com',
    address: '789 Maple Avenue, Oakland, CA 94612',
    emergencyContact: { name: 'Patricia Wilson', relation: 'Wife', phone: '(555) 345-6790' },
    insurance: { provider: 'Medicare', policyNumber: 'MC-456789012', group: 'MCARE-A' },
    primaryCare: 'Dr. David Martinez',
    allergies: ['Aspirin', 'Ibuprofen', 'Latex'],
    medications: [
      { name: 'Atorvastatin', dosage: '40mg', frequency: 'Once daily', purpose: 'Cholesterol' },
      { name: 'Warfarin', dosage: '5mg', frequency: 'Once daily', purpose: 'Blood thinner' },
      { name: 'Metoprolol', dosage: '50mg', frequency: 'Twice daily', purpose: 'Heart rate control' },
      { name: 'Omeprazole', dosage: '20mg', frequency: 'Once daily', purpose: 'Acid reflux' }
    ],
    conditions: ['Atrial Fibrillation', 'Coronary Artery Disease', 'GERD'],
    vitals: {
      current: { bp: '135/80', heartRate: 68, temperature: 98.2, weight: 185, height: 70 },
      history: [
        { date: '2024-11-20', bp: '135/80', heartRate: 68, weight: 185 },
        { date: '2024-10-15', bp: '138/82', heartRate: 72, weight: 186 },
        { date: '2024-09-10', bp: '140/85', heartRate: 75, weight: 188 },
        { date: '2024-08-05', bp: '142/86', heartRate: 78, weight: 190 },
        { date: '2024-07-01', bp: '145/88', heartRate: 80, weight: 192 },
        { date: '2024-06-01', bp: '148/90', heartRate: 82, weight: 194 }
      ]
    },
    labResults: [
      { date: '2024-11-15', test: 'INR', value: '2.4', status: 'normal', reference: '2.0 - 3.0' },
      { date: '2024-11-15', test: 'LDL Cholesterol', value: '78 mg/dL', status: 'optimal', reference: '< 100 mg/dL' },
      { date: '2024-11-15', test: 'Creatinine', value: '1.1 mg/dL', status: 'normal', reference: '0.7 - 1.3 mg/dL' },
      { date: '2024-11-15', test: 'BNP', value: '85 pg/mL', status: 'normal', reference: '< 100 pg/mL' },
      { date: '2024-09-10', test: 'INR', value: '2.1', status: 'normal', reference: '2.0 - 3.0' }
    ],
    timeline: [
      { date: '2024-11-20', type: 'visit', title: 'Cardiology Follow-up', doctor: 'Dr. Robert Kim', notes: 'AFib well controlled. Warfarin therapy stable. Continue current regimen.', category: 'cardiology' },
      { date: '2024-11-15', type: 'lab', title: 'INR Check', doctor: 'Quest Diagnostics', notes: 'INR 2.4 - therapeutic range. No dose adjustment needed.', category: 'lab' },
      { date: '2024-10-15', type: 'visit', title: 'Primary Care Visit', doctor: 'Dr. David Martinez', notes: 'Overall stable. Discussed fall prevention and exercise.', category: 'primary-care' },
      { date: '2024-09-20', type: 'procedure', title: 'Echocardiogram', doctor: 'Dr. Robert Kim', notes: 'LVEF 55%, mild left atrial enlargement. Stable from prior study.', category: 'cardiology' },
      { date: '2024-08-10', type: 'specialist', title: 'GI Consult', doctor: 'Dr. Emily Wong', notes: 'GERD well controlled. Continue PPI therapy.', category: 'gastroenterology' },
      { date: '2024-06-15', type: 'procedure', title: 'Cardiac Stress Test', doctor: 'Dr. Robert Kim', notes: 'Negative for ischemia. Good exercise tolerance.', category: 'cardiology' }
    ],
    riskScore: 52,
    riskFactors: ['Atrial Fibrillation', 'Age > 65', 'Coronary Artery Disease', 'Multiple medications'],
    aiInsights: [
      { type: 'positive', text: 'INR stable in therapeutic range - warfarin dosing optimal.' },
      { type: 'positive', text: 'Heart rate well controlled with current beta-blocker dose.' },
      { type: 'recommendation', text: 'Annual flu vaccine due - schedule before flu season.' },
      { type: 'alert', text: 'High fall risk due to anticoagulation - ensure home safety assessment completed.' }
    ]
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    avatar: 'MR',
    dob: '1992-07-08',
    age: 32,
    gender: 'Female',
    bloodType: 'B+',
    phone: '(555) 456-7890',
    email: 'maria.r@email.com',
    address: '456 Pine Street, San Jose, CA 95112',
    emergencyContact: { name: 'Carlos Rodriguez', relation: 'Brother', phone: '(555) 456-7891' },
    insurance: { provider: 'Anthem', policyNumber: 'AN-321654987', group: 'TECH-2024' },
    primaryCare: 'Dr. Jennifer Lee',
    allergies: [],
    medications: [
      { name: 'Sertraline', dosage: '100mg', frequency: 'Once daily', purpose: 'Anxiety/Depression' },
      { name: 'Birth Control', dosage: 'Standard', frequency: 'Once daily', purpose: 'Contraception' }
    ],
    conditions: ['Generalized Anxiety Disorder', 'Migraine'],
    vitals: {
      current: { bp: '118/75', heartRate: 70, temperature: 98.6, weight: 135, height: 65 },
      history: [
        { date: '2024-11-10', bp: '118/75', heartRate: 70, weight: 135 },
        { date: '2024-09-15', bp: '120/76', heartRate: 72, weight: 134 },
        { date: '2024-07-20', bp: '122/78', heartRate: 74, weight: 136 },
        { date: '2024-05-25', bp: '124/80', heartRate: 76, weight: 138 },
        { date: '2024-03-30', bp: '126/82', heartRate: 78, weight: 140 },
        { date: '2024-01-15', bp: '128/84', heartRate: 80, weight: 142 }
      ]
    },
    labResults: [
      { date: '2024-11-05', test: 'TSH', value: '2.1 mIU/L', status: 'normal', reference: '0.4 - 4.0 mIU/L' },
      { date: '2024-11-05', test: 'Vitamin D', value: '32 ng/mL', status: 'normal', reference: '30 - 100 ng/mL' },
      { date: '2024-11-05', test: 'Iron', value: '85 mcg/dL', status: 'normal', reference: '60 - 170 mcg/dL' },
      { date: '2024-11-05', test: 'B12', value: '450 pg/mL', status: 'normal', reference: '200 - 900 pg/mL' }
    ],
    timeline: [
      { date: '2024-11-10', type: 'visit', title: 'Annual Wellness Visit', doctor: 'Dr. Jennifer Lee', notes: 'Healthy overall. Anxiety well managed. Continue current medications.', category: 'primary-care' },
      { date: '2024-11-05', type: 'lab', title: 'Annual Blood Work', doctor: 'LabCorp', notes: 'All values within normal limits. No concerns.', category: 'lab' },
      { date: '2024-09-15', type: 'specialist', title: 'Psychiatry Follow-up', doctor: 'Dr. Mark Stevens', notes: 'Sertraline effective. GAD symptoms well controlled.', category: 'psychiatry' },
      { date: '2024-08-01', type: 'visit', title: 'Migraine Evaluation', doctor: 'Dr. Jennifer Lee', notes: 'Occasional migraines. Prescribed sumatriptan as needed.', category: 'primary-care' },
      { date: '2024-06-10', type: 'procedure', title: 'Annual GYN Exam', doctor: 'Dr. Susan Park', notes: 'Normal exam. Pap smear results pending.', category: 'gynecology' },
      { date: '2024-03-20', type: 'specialist', title: 'Psychiatry Visit', doctor: 'Dr. Mark Stevens', notes: 'Increased Sertraline from 50mg to 100mg for better control.', category: 'psychiatry' }
    ],
    riskScore: 15,
    riskFactors: ['Anxiety disorder', 'Migraine history'],
    aiInsights: [
      { type: 'positive', text: 'All lab values normal - excellent overall health.' },
      { type: 'positive', text: 'Anxiety symptoms stable with current treatment plan.' },
      { type: 'recommendation', text: 'Consider stress management techniques for migraine prevention.' },
      { type: 'info', text: 'Next preventive screening: Mammogram recommended at age 40.' }
    ]
  },
  {
    id: 4,
    name: 'Robert Thompson',
    avatar: 'RT',
    dob: '1975-12-03',
    age: 48,
    gender: 'Male',
    bloodType: 'AB+',
    phone: '(555) 567-8901',
    email: 'rthompson@email.com',
    address: '321 Cedar Lane, Berkeley, CA 94704',
    emergencyContact: { name: 'Linda Thompson', relation: 'Wife', phone: '(555) 567-8902' },
    insurance: { provider: 'Kaiser Permanente', policyNumber: 'KP-654321098', group: 'CORP-TECH' },
    primaryCare: 'Dr. Amanda Foster',
    allergies: ['Shellfish', 'Contrast dye'],
    medications: [
      { name: 'Amlodipine', dosage: '5mg', frequency: 'Once daily', purpose: 'Blood pressure' },
      { name: 'Allopurinol', dosage: '300mg', frequency: 'Once daily', purpose: 'Gout prevention' },
      { name: 'Vitamin D', dosage: '2000 IU', frequency: 'Once daily', purpose: 'Supplement' }
    ],
    conditions: ['Hypertension', 'Gout', 'Vitamin D Deficiency'],
    vitals: {
      current: { bp: '132/84', heartRate: 75, temperature: 98.5, weight: 210, height: 72 },
      history: [
        { date: '2024-11-18', bp: '132/84', heartRate: 75, weight: 210 },
        { date: '2024-10-10', bp: '135/86', heartRate: 76, weight: 212 },
        { date: '2024-09-05', bp: '138/88', heartRate: 78, weight: 215 },
        { date: '2024-08-01', bp: '140/90', heartRate: 80, weight: 218 },
        { date: '2024-06-25', bp: '142/92', heartRate: 82, weight: 220 },
        { date: '2024-05-20', bp: '145/94', heartRate: 84, weight: 222 }
      ]
    },
    labResults: [
      { date: '2024-11-12', test: 'Uric Acid', value: '6.2 mg/dL', status: 'normal', reference: '< 7.0 mg/dL' },
      { date: '2024-11-12', test: 'Creatinine', value: '1.0 mg/dL', status: 'normal', reference: '0.7 - 1.3 mg/dL' },
      { date: '2024-11-12', test: 'Vitamin D', value: '38 ng/mL', status: 'normal', reference: '30 - 100 ng/mL' },
      { date: '2024-11-12', test: 'Triglycerides', value: '165 mg/dL', status: 'borderline', reference: '< 150 mg/dL' },
      { date: '2024-08-05', test: 'Uric Acid', value: '8.5 mg/dL', status: 'elevated', reference: '< 7.0 mg/dL' }
    ],
    timeline: [
      { date: '2024-11-18', type: 'visit', title: 'Blood Pressure Check', doctor: 'Dr. Amanda Foster', notes: 'BP improved. Weight loss making positive impact.', category: 'primary-care' },
      { date: '2024-11-12', type: 'lab', title: 'Metabolic Panel', doctor: 'Quest Diagnostics', notes: 'Uric acid normalized. Kidney function stable.', category: 'lab' },
      { date: '2024-10-10', type: 'visit', title: 'Gout Follow-up', doctor: 'Dr. Amanda Foster', notes: 'No recent gout flares. Continue allopurinol.', category: 'primary-care' },
      { date: '2024-09-15', type: 'specialist', title: 'Rheumatology Consult', doctor: 'Dr. Patricia Chen', notes: 'Gout well controlled. Discussed dietary modifications.', category: 'rheumatology' },
      { date: '2024-08-01', type: 'visit', title: 'Acute Gout Flare', doctor: 'Dr. Amanda Foster', notes: 'Left big toe gout attack. Prescribed colchicine, started allopurinol.', category: 'primary-care' },
      { date: '2024-06-25', type: 'visit', title: 'Routine Checkup', doctor: 'Dr. Amanda Foster', notes: 'Hypertension noted. Started amlodipine.', category: 'primary-care' }
    ],
    riskScore: 42,
    riskFactors: ['Hypertension', 'Overweight', 'Gout', 'Elevated triglycerides'],
    aiInsights: [
      { type: 'positive', text: 'Uric acid dropped from 8.5 to 6.2 mg/dL - allopurinol effective.' },
      { type: 'positive', text: 'Weight loss of 12 lbs in 6 months - blood pressure improving.' },
      { type: 'recommendation', text: 'Continue dietary modifications to further reduce triglycerides.' },
      { type: 'alert', text: 'Contrast dye allergy - ensure premedication for any CT scans.' }
    ]
  },
  {
    id: 5,
    name: 'Eleanor Davis',
    avatar: 'ED',
    dob: '1945-05-20',
    age: 79,
    gender: 'Female',
    bloodType: 'A-',
    phone: '(555) 678-9012',
    email: 'eleanor.d@email.com',
    address: '567 Willow Court, Palo Alto, CA 94301',
    emergencyContact: { name: 'Thomas Davis', relation: 'Son', phone: '(555) 678-9013' },
    insurance: { provider: 'Medicare + Medigap', policyNumber: 'MC-987654321', group: 'MCARE-B' },
    primaryCare: 'Dr. David Martinez',
    allergies: ['Codeine', 'ACE Inhibitors'],
    medications: [
      { name: 'Aricept', dosage: '10mg', frequency: 'Once daily', purpose: 'Memory' },
      { name: 'Losartan', dosage: '50mg', frequency: 'Once daily', purpose: 'Blood pressure' },
      { name: 'Calcium + D', dosage: '600mg/400IU', frequency: 'Twice daily', purpose: 'Bone health' },
      { name: 'Levothyroxine', dosage: '75mcg', frequency: 'Once daily', purpose: 'Thyroid' },
      { name: 'Eye drops', dosage: 'Timolol', frequency: 'Twice daily', purpose: 'Glaucoma' }
    ],
    conditions: ['Mild Cognitive Impairment', 'Hypertension', 'Hypothyroidism', 'Glaucoma', 'Osteoporosis'],
    vitals: {
      current: { bp: '140/85', heartRate: 72, temperature: 97.8, weight: 128, height: 62 },
      history: [
        { date: '2024-11-22', bp: '140/85', heartRate: 72, weight: 128 },
        { date: '2024-10-20', bp: '142/86', heartRate: 74, weight: 129 },
        { date: '2024-09-18', bp: '138/84', heartRate: 70, weight: 128 },
        { date: '2024-08-15', bp: '144/88', heartRate: 76, weight: 130 },
        { date: '2024-07-12', bp: '146/90', heartRate: 78, weight: 131 },
        { date: '2024-06-10', bp: '148/92', heartRate: 80, weight: 132 }
      ]
    },
    labResults: [
      { date: '2024-11-18', test: 'TSH', value: '2.8 mIU/L', status: 'normal', reference: '0.4 - 4.0 mIU/L' },
      { date: '2024-11-18', test: 'Creatinine', value: '0.9 mg/dL', status: 'normal', reference: '0.5 - 1.1 mg/dL' },
      { date: '2024-11-18', test: 'Vitamin B12', value: '380 pg/mL', status: 'normal', reference: '200 - 900 pg/mL' },
      { date: '2024-11-18', test: 'Vitamin D', value: '42 ng/mL', status: 'normal', reference: '30 - 100 ng/mL' },
      { date: '2024-06-15', test: 'DEXA Scan', value: 'T-score -2.8', status: 'osteoporosis', reference: '> -2.5' }
    ],
    timeline: [
      { date: '2024-11-22', type: 'visit', title: 'Geriatric Assessment', doctor: 'Dr. David Martinez', notes: 'Cognitive function stable. Fall risk assessment completed.', category: 'primary-care' },
      { date: '2024-11-18', type: 'lab', title: 'Comprehensive Panel', doctor: 'Quest Diagnostics', notes: 'Thyroid stable. Kidney function good. B12 adequate.', category: 'lab' },
      { date: '2024-10-20', type: 'specialist', title: 'Neurology Follow-up', doctor: 'Dr. Michael Brown', notes: 'MCI stable. Continue Aricept. Cognitive exercises recommended.', category: 'neurology' },
      { date: '2024-10-05', type: 'specialist', title: 'Ophthalmology Visit', doctor: 'Dr. Lisa Park', notes: 'Glaucoma stable. IOP 16 mmHg. Continue current drops.', category: 'ophthalmology' },
      { date: '2024-08-15', type: 'visit', title: 'Medication Review', doctor: 'Dr. David Martinez', notes: 'Simplified medication regimen. Discussed pill organizer.', category: 'primary-care' },
      { date: '2024-06-15', type: 'procedure', title: 'DEXA Bone Scan', doctor: 'Radiology', notes: 'Osteoporosis confirmed. Started calcium/vitamin D supplementation.', category: 'radiology' }
    ],
    riskScore: 68,
    riskFactors: ['Age > 75', 'Cognitive impairment', 'Fall risk', 'Polypharmacy', 'Osteoporosis'],
    aiInsights: [
      { type: 'positive', text: 'Thyroid levels well controlled on current levothyroxine dose.' },
      { type: 'alert', text: 'High fall risk - recommend home safety evaluation and physical therapy.' },
      { type: 'recommendation', text: 'Consider bisphosphonate therapy for osteoporosis given T-score -2.8.' },
      { type: 'alert', text: 'Polypharmacy (5+ medications) - annual medication reconciliation recommended.' }
    ]
  }
]

// Utility functions for data access
export function getPatientById(id) {
  return patients.find(p => p.id === parseInt(id))
}

export function getPatientsByRiskLevel(level) {
  const thresholds = { low: 25, medium: 50, high: 100 }
  return patients.filter(p => {
    if (level === 'low') return p.riskScore <= thresholds.low
    if (level === 'medium') return p.riskScore > thresholds.low && p.riskScore <= thresholds.medium
    if (level === 'high') return p.riskScore > thresholds.medium
    return true
  })
}

export function searchPatients(query) {
  const q = query.toLowerCase()
  return patients.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.conditions.some(c => c.toLowerCase().includes(q))
  )
}

export function calculateAgeFromDob(dob) {
  const today = new Date()
  const birth = new Date(dob)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}
