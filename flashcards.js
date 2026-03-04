// CFP® Flashcards — 125 exam-focused definitions
// Domains: professional, general, education, risk, investment, tax, retirement, estate, psychology

const FLASHCARDS = [

  // ── PROFESSIONAL CONDUCT (12) ───────────────────────────────────────────────

  { id: 1, term: "Fiduciary Duty", definition: "The obligation to act in the client's best interest at all times. Applies to ALL CFP® financial planning relationships — not just investment management. Higher standard than the suitability standard used by broker-dealers.", domain: "professional", category: "Ethics" },

  { id: 2, term: "CFP® Code of Ethics — 7 Principles", definition: "Integrity, Competence, Diligence, Confidentiality, Professionalism, Objectivity, Fairness. Remember: I Can Deliver CFP Professional Outcomes Fast.", domain: "professional", category: "Ethics" },

  { id: 3, term: "Duty of Disclosure", definition: "CFP® must disclose all fees, compensation methods, and material conflicts of interest. Disclosure alone does not cure a conflict — the planner must still act in the client's best interest.", domain: "professional", category: "Ethics" },

  { id: 4, term: "Confidentiality Exception — Planned Future Crimes", definition: "Client information is confidential, but planned future crimes are NOT protected. The CFP® must withdraw from the engagement and may be required to report under applicable law. Past crimes remain confidential.", domain: "professional", category: "Ethics" },

  { id: 5, term: "Suitability vs. Fiduciary Standard", definition: "Suitability (broker-dealer standard): recommendation must be appropriate for the client. Fiduciary (CFP® standard): recommendation must be in the client's BEST interest. Reg BI raises broker standard toward best interest but still falls short of full fiduciary duty.", domain: "professional", category: "Regulatory" },

  { id: 6, term: "RIA Registration Threshold", definition: "Registered Investment Advisers (RIAs) must register with the SEC if AUM > $100M; register with the state if AUM < $100M (with some exceptions). RIAs have a fiduciary duty to clients.", domain: "professional", category: "Regulatory" },

  { id: 7, term: "CFP® Continuing Education Requirement", definition: "30 hours of CE every 2-year reporting period, of which 2 hours must cover CFP Board's Code of Ethics and Standards of Conduct. Failure to complete CE can result in suspension of the CFP® marks.", domain: "professional", category: "Regulatory" },

  { id: 8, term: "Six-Step Financial Planning Process", definition: "1) Establish client-planner relationship; 2) Gather client data and goals; 3) Analyze and evaluate financial status; 4) Develop recommendations; 5) Present recommendations; 6) Implement and monitor the plan. All six steps are required for comprehensive planning.", domain: "professional", category: "Practice Standards" },

  { id: 9, term: "Duty of Care", definition: "CFP® recommendations must be based on the client's full financial profile — goals, risk tolerance, time horizon, liquidity needs, and tax situation. Not just one piece of data.", domain: "professional", category: "Ethics" },

  { id: 10, term: "Responding to Unsuitable Client Requests", definition: "When a client requests a strategy the CFP® believes is unsuitable or against their best interest, the CFP® must decline and explain why — not simply comply. Compliance with an unsuitable instruction violates fiduciary duty.", domain: "professional", category: "Practice Standards" },

  { id: 11, term: "Comprehensive vs. Modular Financial Plan", definition: "A comprehensive plan addresses all planning areas holistically. A modular plan addresses only specific client concerns. The engagement scope must be documented in writing.", domain: "professional", category: "Practice Standards" },

  { id: 12, term: "CFP Board Enforcement vs. State Enforcement", definition: "CFP Board enforces the Code of Ethics and Standards of Conduct; state securities boards enforce state securities laws. SEC and FINRA regulate registered advisers and broker-dealers respectively.", domain: "professional", category: "Regulatory" },


  // ── GENERAL PRINCIPLES (15) ─────────────────────────────────────────────────

  { id: 13, term: "Future Value Formula", definition: "FV = PV × (1 + r)^n. Grows a present lump sum forward. For periodic payments use annuity mode on calculator. Check BEG/END mode for annuity due vs. ordinary annuity.", domain: "general", category: "TVM" },

  { id: 14, term: "Present Value Formula", definition: "PV = FV / (1 + r)^n. Discounts a future amount back to today. Used for retirement projections, lump-sum valuations, and NPV analysis.", domain: "general", category: "TVM" },

  { id: 15, term: "Real Rate of Return", definition: "Real rate = [(1 + nominal) / (1 + inflation)] − 1. Measures purchasing-power growth after inflation. Approximation: nominal rate − inflation rate (use exact formula on exam).", domain: "general", category: "TVM" },

  { id: 16, term: "Effective Annual Rate (EAR)", definition: "EAR = (1 + r/n)^n − 1. Converts a nominal rate compounded n times per year into the true annual rate. EAR > nominal rate whenever compounding > once per year.", domain: "general", category: "TVM" },

  { id: 17, term: "Rule of 72", definition: "Years to double an investment ≈ 72 ÷ interest rate. Example: at 6% annual return, money doubles in ~12 years. Quick mental math; not exact.", domain: "general", category: "TVM" },

  { id: 18, term: "Annuity Due vs. Ordinary Annuity", definition: "Ordinary annuity: payments at END of period (most common). Annuity due: payments at BEGINNING of period. Annuity due FV/PV = Ordinary × (1 + r). Always set calculator to BEG mode for annuity due.", domain: "general", category: "TVM" },

  { id: 19, term: "Balance Sheet", definition: "Assets = Liabilities + Net Worth. A snapshot in time. Current assets include cash and items convertible to cash within 1 year. Net worth = total assets − total liabilities.", domain: "general", category: "Financial Statements" },

  { id: 20, term: "Cash Flow Statement", definition: "Income − Expenses = Surplus (or Deficit). Covers a period of time. Positive surplus is needed for savings and wealth building. Deficits erode net worth.", domain: "general", category: "Financial Statements" },

  { id: 21, term: "Current Ratio", definition: "Current Ratio = Current Assets ÷ Current Liabilities. Target: ≥ 1.0 (can cover short-term obligations). Below 1.0 signals liquidity risk.", domain: "general", category: "Financial Ratios" },

  { id: 22, term: "Debt-to-Income Ratio", definition: "DTI = Annual total debt payments ÷ Gross annual income. General guideline: < 36%. Lenders use this to assess mortgage qualification risk.", domain: "general", category: "Financial Ratios" },

  { id: 23, term: "Housing (Front-End) Ratio", definition: "Housing Ratio = Monthly housing costs ÷ Monthly gross income. Guideline: ≤ 28%. Includes PITI (principal, interest, taxes, insurance). Used by mortgage lenders.", domain: "general", category: "Financial Ratios" },

  { id: 24, term: "Emergency Fund Guideline", definition: "3–6 months of living expenses held in liquid assets. Self-employed or single-income households should hold closer to 6 months. Not invested in equities — must be immediately accessible.", domain: "general", category: "Financial Ratios" },

  { id: 25, term: "Qualified Mortgage Rules", definition: "A qualified mortgage has debt-to-income ≤ 43%, no exotic features (interest-only, negative amortization, balloon payments > 7 years), and gives lenders legal protection. Points: 1 point = 1% of loan balance.", domain: "general", category: "Mortgage" },

  { id: 26, term: "Adjustable Rate Mortgage (ARM) Caps", definition: "ARMs have three caps: initial cap (max change at first adjustment), periodic cap (max change per adjustment), and lifetime cap (max total change from start rate). Lower initial rate than fixed but interest rate risk.", domain: "general", category: "Mortgage" },

  { id: 27, term: "Risk Management Hierarchy", definition: "Avoid → Reduce → Retain → Transfer. First, avoid unnecessary risks. Then reduce likelihood/impact. Retain small, affordable risks. Transfer large risks via insurance. Insurance is the last resort, not the first.", domain: "general", category: "Insurance Hierarchy" },


  // ── EDUCATION PLANNING (10) ─────────────────────────────────────────────────

  { id: 28, term: "529 Plan — Tax Treatment", definition: "Contributions are after-tax (no federal deduction; many states allow state deduction). Growth is tax-deferred. Qualified withdrawals are completely tax-free. Non-qualified withdrawals: 10% penalty + ordinary income tax on earnings only.", domain: "education", category: "529 Plans" },

  { id: 29, term: "529 Plan — Qualified Expenses", definition: "Tuition, fees, books, room & board, K-12 (up to $10,000/year), student loan repayment (up to $10,000 lifetime per beneficiary), and apprenticeship programs. OBBBA 2025 expanded to include additional vocational training.", domain: "education", category: "529 Plans" },

  { id: 30, term: "529 Superfunding (5-Year Election)", definition: "Lump-sum contribution of up to 5 years of annual gift exclusions: $95,000/beneficiary ($190,000 MFJ gift-splitting) in 2025. No additional gifts to same beneficiary during the 5-year period without gift tax. Reported on Form 709.", domain: "education", category: "529 Plans" },

  { id: 31, term: "529-to-Roth IRA Rollover (SECURE 2.0)", definition: "After a 15-year holding period, unused 529 funds can be rolled to the beneficiary's Roth IRA. Lifetime limit: $35,000. Subject to annual Roth contribution limits. The beneficiary must have earned income.", domain: "education", category: "529 Plans" },

  { id: 32, term: "529 FAFSA Treatment", definition: "Parent-owned 529: assessed at max 5.64% (very favorable). Student-owned 529: assessed at up to 20%. Retirement accounts (IRAs, 401ks) are NOT counted for FAFSA. Home equity is NOT counted.", domain: "education", category: "FAFSA" },

  { id: 33, term: "Coverdell ESA", definition: "Max $2,000/year per beneficiary. Income phase-out: $95K–$110K single, $190K–$220K MFJ. Funds must be used by age 30 (or roll to family member). Covers K-12 AND higher education. Counted as student asset for FAFSA (disadvantageous).", domain: "education", category: "Coverdell ESA" },

  { id: 34, term: "UGMA/UTMA Accounts & Kiddie Tax", definition: "Custodial accounts; assets irrevocably transfer to child at majority (18 or 21). Kiddie Tax (2025): first $1,350 sheltered by child's standard deduction; next $1,350 taxed at child's rate; above $2,700 taxed at parent's marginal rate. Counted at student asset rate (up to 20%) for FAFSA.", domain: "education", category: "UGMA/UTMA" },

  { id: 35, term: "American Opportunity Credit (AOC)", definition: "Up to $2,500/year for first 4 years of post-secondary education. 100% of first $2,000 + 25% of next $2,000 in qualified expenses. Phase-out: $80K–$90K single, $160K–$180K MFJ. 40% refundable (up to $1,000 back even with no tax liability).", domain: "education", category: "Tax Credits" },

  { id: 36, term: "Lifetime Learning Credit (LLC)", definition: "Up to $2,000/year (20% of up to $10,000 qualified expenses). No limit on years of study; available for part-time students and professional development. Phase-out: $80K–$90K single, $160K–$180K MFJ. Non-refundable.", domain: "education", category: "Tax Credits" },

  { id: 37, term: "Subsidized vs. Unsubsidized Student Loans", definition: "Subsidized: government pays interest while student is in school; need-based. Unsubsidized: interest accrues while in school regardless of need. PLUS loans: parent borrowing, credit-based, no income limit. Pell Grants are need-based and do not need repayment.", domain: "education", category: "Financial Aid" },


  // ── RISK MANAGEMENT (15) ────────────────────────────────────────────────────

  { id: 38, term: "Human Life Value Method", definition: "Estimates life insurance need as the present value of future after-tax earnings minus personal consumption. Best for income replacement focus. Ignores specific financial obligations like mortgage or college funding.", domain: "risk", category: "Life Insurance" },

  { id: 39, term: "Needs Approach (Life Insurance)", definition: "Estimates insurance need based on specific financial obligations: mortgage payoff, income replacement for dependents, education funding, final expenses. More targeted than human life value. Most commonly tested method.", domain: "risk", category: "Life Insurance" },

  { id: 40, term: "Term Life Insurance", definition: "Pure death benefit for a fixed term (10, 20, 30 years); no cash value. Lowest initial premium. Appropriate for temporary needs (mortgage, income replacement while children are young). Premium increases at renewal.", domain: "risk", category: "Life Insurance Types" },

  { id: 41, term: "Whole Life Insurance", definition: "Permanent insurance with level premiums and guaranteed cash value growth. Highest premium of all types. Cash value grows at guaranteed rate; can borrow against it. Death benefit paid income-tax-free to beneficiary.", domain: "risk", category: "Life Insurance Types" },

  { id: 42, term: "Universal Life Insurance", definition: "Permanent insurance with flexible premiums and adjustable death benefit. Cash value grows at non-guaranteed rate based on current credited rates. Underfunding can cause policy lapse. More flexible than whole life.", domain: "risk", category: "Life Insurance Types" },

  { id: 43, term: "Modified Endowment Contract (MEC)", definition: "A life insurance policy that fails the 7-pay test (funded too quickly in first 7 years). Loses favorable life insurance tax treatment. Distributions follow LIFO (gains out first). Subject to 10% penalty on earnings withdrawn before age 59½.", domain: "risk", category: "Life Insurance" },

  { id: 44, term: "1035 Exchange", definition: "Tax-free swap of a life insurance policy for another life insurance policy or annuity, or annuity for annuity. No tax is recognized at time of exchange. Basis carries over. Cannot exchange annuity for life insurance.", domain: "risk", category: "Life Insurance" },

  { id: 45, term: "Disability Insurance — Own vs. Any Occupation", definition: "Own-occupation: can't perform duties of YOUR specific occupation (best coverage, highest premium). Any-occupation: can't perform duties of ANY occupation for which reasonably suited (more restrictive, lower premium). Most policies blend both definitions.", domain: "risk", category: "Disability" },

  { id: 46, term: "Disability Elimination Period", definition: "The waiting period before benefits begin — like a deductible measured in time (30, 60, 90, 180 days). Longer elimination period = lower premium. Client must self-insure during elimination period. Emergency fund covers this gap.", domain: "risk", category: "Disability" },

  { id: 47, term: "Group Disability Insurance — Tax Treatment", definition: "Employer-paid premiums → benefits received are TAXABLE income to employee. Employee-paid premiums (after-tax) → benefits received are TAX-FREE. This distinction is heavily tested on the CFP exam.", domain: "risk", category: "Disability" },

  { id: 48, term: "HSA — Triple Tax Advantage", definition: "1) Contributions are pre-tax (or tax-deductible above-the-line). 2) Growth is tax-deferred. 3) Withdrawals are tax-free for qualified medical expenses. After age 65: withdrawals for non-medical purposes taxed as ordinary income (like a traditional IRA). 2025 limits: $4,300 single / $8,550 family + $1,000 catch-up (age 55+).", domain: "risk", category: "Health Insurance" },

  { id: 49, term: "Long-Term Care Insurance — Benefit Triggers", definition: "Benefits triggered by: (1) inability to perform 2 of 6 ADLs (Eating, Bathing, Dressing, Toileting, Transferring, Continence), OR (2) cognitive impairment. Tax-qualified LTC premiums are partially deductible (age-based limits); benefits tax-free up to IRS per diem limit.", domain: "risk", category: "Long-Term Care" },

  { id: 50, term: "Annuity Exclusion Ratio", definition: "Exclusion Ratio = Investment in Contract ÷ Expected Return. This fraction of each payment is return of basis (tax-free); the remainder is ordinary income. Once basis is fully recovered, entire payment becomes taxable.", domain: "risk", category: "Annuities" },

  { id: 51, term: "Non-Qualified Annuity Distribution Rules", definition: "Non-qualified annuities use LIFO ordering: gains come out FIRST (taxable), then return of basis (tax-free). Contrast with qualified annuity (IRA): entire distribution is taxable. 10% penalty on earnings before age 59½.", domain: "risk", category: "Annuities" },

  { id: 52, term: "Homeowners Insurance — HO-3 Policy", definition: "HO-3 (most common): open perils on the dwelling (all risks except excluded), named perils on contents. Requires separate flood and earthquake coverage. Umbrella liability provides excess coverage above home and auto limits (minimum $1M).", domain: "risk", category: "Property/Casualty" },


  // ── INVESTMENT PLANNING (20) ────────────────────────────────────────────────

  { id: 53, term: "Bond Price-Yield Relationship", definition: "Bond prices and yields (interest rates) move in OPPOSITE directions. When rates rise, bond prices fall; when rates fall, bond prices rise. Bond price = PV of all future cash flows (coupons + par) discounted at YTM.", domain: "investment", category: "Bonds" },

  { id: 54, term: "Duration", definition: "Weighted average time to receive the present value of a bond's cash flows. Measures price sensitivity to interest rate changes. Zero-coupon bond duration = maturity. Higher duration = greater price sensitivity. Portfolio duration = weighted average of component durations.", domain: "investment", category: "Bonds" },

  { id: 55, term: "Modified Duration & Price Change", definition: "Modified Duration = Duration ÷ (1 + YTM). % Price Change ≈ −Modified Duration × Δyield. Example: bond with MD = 5, rates rise 1% → price falls ~5%. Negative sign = inverse relationship.", domain: "investment", category: "Bonds" },

  { id: 56, term: "Convexity", definition: "Actual bond price changes are curved (convex), not linear. Bonds gain MORE when rates fall than they lose when rates rise — beneficial asymmetry. High-coupon, short-maturity bonds have lower convexity. Callable bonds can exhibit negative convexity.", domain: "investment", category: "Bonds" },

  { id: 57, term: "Current Yield vs. YTM", definition: "Current Yield = Annual Coupon ÷ Current Price (simple, ignores time value). YTM = IRR of all bond cash flows (most comprehensive). When bond trades at discount: YTM > current yield > coupon rate. When at premium: reverse.", domain: "investment", category: "Bonds" },

  { id: 58, term: "Standard Deviation vs. Beta", definition: "Standard deviation measures TOTAL risk (systematic + unsystematic). Beta measures SYSTEMATIC risk only (market sensitivity). Use standard deviation for undiversified portfolios; beta for well-diversified portfolios.", domain: "investment", category: "Risk Statistics" },

  { id: 59, term: "Capital Asset Pricing Model (CAPM)", definition: "E(R) = Rf + β(Rm − Rf). Required return = risk-free rate + beta × market risk premium. If E(R) from CAPM > required return → security is undervalued (plot above SML). β = 1 means same risk as market.", domain: "investment", category: "Portfolio Measures" },

  { id: 60, term: "Correlation & Diversification", definition: "Correlation coefficient (ρ) ranges from −1 to +1. Lower correlation between assets → greater diversification benefit. Perfect negative correlation (−1) provides maximum diversification. Adding ~15-20 uncorrelated stocks eliminates most unsystematic (diversifiable) risk.", domain: "investment", category: "MPT" },

  { id: 61, term: "Sharpe Ratio", definition: "Sharpe = (Rp − Rf) ÷ σp. Measures excess return per unit of TOTAL risk. Best used for undiversified portfolios or when comparing standalone assets. Higher is better.", domain: "investment", category: "Portfolio Measures" },

  { id: 62, term: "Treynor Ratio", definition: "Treynor = (Rp − Rf) ÷ βp. Measures excess return per unit of SYSTEMATIC risk (beta). Best used for well-diversified portfolios where unsystematic risk is already eliminated. Higher is better.", domain: "investment", category: "Portfolio Measures" },

  { id: 63, term: "Jensen's Alpha", definition: "Alpha = Rp − [Rf + β(Rm − Rf)]. The actual return minus the CAPM-expected return. Positive alpha = manager outperformed on a risk-adjusted basis. Zero alpha = performed exactly as predicted by CAPM.", domain: "investment", category: "Portfolio Measures" },

  { id: 64, term: "Efficient Market Hypothesis (EMH) — Three Forms", definition: "Weak: past prices don't predict future (technical analysis fails). Semi-strong: all public info is priced in (fundamental analysis fails). Strong: all info including insider info is priced in (no one consistently beats market). CFP exam tests all three.", domain: "investment", category: "EMH" },

  { id: 65, term: "Efficient Frontier & CML vs. SML", definition: "Efficient Frontier: set of portfolios offering max return for given risk. CML (Capital Market Line): efficient frontier when risk-free asset is available; x-axis = σ (total risk). SML (Security Market Line): CAPM line for all securities; x-axis = beta (systematic risk only).", domain: "investment", category: "MPT" },

  { id: 66, term: "Dividend Discount Model (DDM)", definition: "Constant growth: P = D₁ ÷ (k − g), where D₁ = D₀ × (1 + g). k = required return, g = constant growth rate. Requires k > g. If calculated price > market price → stock is undervalued.", domain: "investment", category: "Equities" },

  { id: 67, term: "Call Option Basics", definition: "Right to BUY stock at strike price. Buyer pays premium (max loss = premium). Writer receives premium. In-the-money call: stock price > strike price. Max gain for buyer: unlimited. Exercise when stock price exceeds strike + premium paid.", domain: "investment", category: "Derivatives" },

  { id: 68, term: "Put Option & Protective Put", definition: "Right to SELL stock at strike price. In-the-money put: stock price < strike price. Protective put: own stock + buy put → limits downside while preserving upside (like insurance). Max gain for put buyer = strike − premium.", domain: "investment", category: "Derivatives" },

  { id: 69, term: "Covered Call Strategy", definition: "Own stock + sell (write) a call. Generates income (premium received). Caps upside at strike price. Max gain = premium + (strike − purchase price). Max loss = stock falls to zero minus premium received. Best in flat or slightly rising markets.", domain: "investment", category: "Derivatives" },

  { id: 70, term: "Margin Account — Margin Call", definition: "Initial margin requirement: 50% (Regulation T). Maintenance margin: typically 25-35%. Margin call price = Initial price × (1 − initial margin%) ÷ (1 − maintenance margin%). If equity falls below maintenance, broker issues margin call.", domain: "investment", category: "Margin" },

  { id: 71, term: "Tax-Loss Harvesting & Wash Sale Rule", definition: "Tax-loss harvesting: sell securities at a loss to offset capital gains. Wash sale rule: loss is disallowed if you buy the same or substantially identical security within 30 days before or after the sale. Disallowed loss is added to basis of new purchase.", domain: "investment", category: "Investment Strategy" },

  { id: 72, term: "Coefficient of Variation (CV)", definition: "CV = σ ÷ E(R). Measures risk per unit of expected return. Lower CV = better risk-adjusted return. Useful for comparing investments with different expected returns — normalizes for scale.", domain: "investment", category: "Risk Statistics" },


  // ── TAX PLANNING (15) ───────────────────────────────────────────────────────

  { id: 73, term: "Gross Income to Taxable Income Calculation", definition: "Gross Income − Above-the-line adjustments = AGI. AGI − Standard deduction (or itemized) = Taxable Income. Taxable Income × Tax Rate = Tax Liability. Tax Liability − Tax Credits = Tax Owed.", domain: "tax", category: "Tax Fundamentals" },

  { id: 74, term: "Above-the-Line Deductions (Deductions FOR AGI)", definition: "Key above-the-line adjustments: HSA contributions, student loan interest (up to $2,500), self-employed health insurance premiums, 50% of self-employment tax, traditional IRA contributions (subject to phase-out), alimony (pre-2019 divorces), educator expenses ($300). OBBBA adds tip/overtime deductions (2025-28).", domain: "tax", category: "Deductions" },

  { id: 75, term: "Standard Deductions (2025)", definition: "Single: $15,000. MFJ: $30,000. Head of Household: $22,500. Additional deduction for age 65+/blind. OBBBA senior deduction: extra $6,000 single / $12,000 MFJ (both 65+) for 2025-2028; phases out at $75K/$150K MAGI.", domain: "tax", category: "Deductions" },

  { id: 76, term: "SALT Deduction Cap", definition: "State and Local Tax (SALT) deduction capped at $10,000 (TCJA). OBBBA 2025: cap raised to $40,000 for 2025-2029, with phase-out from $500K-$600K MAGI; reverts to $10,000 in 2030. Includes state income taxes OR sales taxes (not both) plus property taxes.", domain: "tax", category: "Deductions" },

  { id: 77, term: "Capital Gains Tax Rates", definition: "Short-term (held ≤ 1 year): taxed as ordinary income. Long-term (held > 1 year): 0%, 15%, or 20% based on income. Collectibles: max 28% rate. Unrecaptured Section 1250 depreciation: max 25%. Qualified dividends: taxed at LTCG rates (61-day holding requirement).", domain: "tax", category: "Capital Gains" },

  { id: 78, term: "Net Investment Income Tax (NIIT)", definition: "3.8% surtax on net investment income (NII) above $200K single / $250K MFJ / $125K MFS. NII includes: interest, dividends, capital gains, rents, royalties. NII EXCLUDES: tax-exempt interest, active business income, wages.", domain: "tax", category: "Capital Gains" },

  { id: 79, term: "Alternative Minimum Tax (AMT) — Key Triggers", definition: "Common AMT triggers: ISO exercise (bargain element is preference item), private activity muni bond interest, SALT deductions, standard deduction (eliminated for AMT). Tax owed = MAX(regular tax, AMT). You pay whichever is higher.", domain: "tax", category: "AMT" },

  { id: 80, term: "AMT Exemptions (2025)", definition: "AMT exemption: $88,100 single; $137,000 MFJ. Phase-out at $626,350 / $1,252,700. AMT rates: 26% on first $239,100 of AMTI; 28% above. Calculate both regular tax and AMT; pay the higher amount.", domain: "tax", category: "AMT" },

  { id: 81, term: "QBI Deduction (Section 199A)", definition: "Up to 20% deduction on Qualified Business Income for pass-through entities (sole props, partnerships, S-corps). Made permanent by OBBBA. Specified Service Trade or Business (SSTB) phase-out range expanded to $75K single / $150K MFJ (OBBBA). Cannot deduct below $0.", domain: "tax", category: "Business Taxation" },

  { id: 82, term: "Section 179 Expensing (2025)", definition: "Immediately deduct the cost of qualifying business property in year placed in service. 2025 limit: $2,500,000 (OBBBA increase from $1,250,000). Phase-out: $1 for $1 above $3.5M of property placed in service. Cannot create a loss.", domain: "tax", category: "Business Taxation" },

  { id: 83, term: "Child Tax Credit (2025 — OBBBA)", definition: "$2,200 per qualifying child under 17. Partially refundable: up to $1,700 refundable (OBBBA). Phase-out: $400K-$440K MFJ. Qualifying child must be under 17, related, lived with taxpayer more than half the year, and not provide more than half of their own support.", domain: "tax", category: "Credits" },

  { id: 84, term: "Tax-Equivalent Yield (TEY)", definition: "TEY = Muni Yield ÷ (1 − Marginal Tax Rate). Converts tax-exempt muni bond yield to equivalent taxable yield. If TEY > taxable bond yield → muni is better. High marginal rate taxpayers benefit most from munis.", domain: "tax", category: "Tax Fundamentals" },

  { id: 85, term: "Filing Status — Head of Household", definition: "HOH requires: unmarried on last day of year (or legally separated), paid more than half cost of maintaining a home, AND qualifying person (child, parent) lived in home more than half the year. Better standard deduction ($22,500) and brackets than Single.", domain: "tax", category: "Filing Status" },

  { id: 86, term: "Statute of Limitations — Tax Returns", definition: "3 years from filing date (ordinary). 6 years if >25% understatement of gross income. Unlimited for fraud or failure to file. 10 years for IRS collections after assessment. No assessment can be made after the applicable limitations period.", domain: "tax", category: "Tax Fundamentals" },

  { id: 87, term: "Charitable Contribution Limits", definition: "Cash gifts to public charities: up to 60% of AGI. Appreciated property: up to 30% of AGI (avoid capital gains on appreciation). OBBBA: 0.5% AGI floor for itemizers starting 2026; non-itemizers can deduct up to $1,000 single / $2,000 MFJ for cash gifts.", domain: "tax", category: "Deductions" },


  // ── RETIREMENT PLANNING (20) ────────────────────────────────────────────────

  { id: 88, term: "2025 Retirement Account Contribution Limits", definition: "401(k)/403(b)/457(b): $23,500 + $7,500 catch-up (50+). Super catch-up ages 60-63: $11,250 (401k/403b). IRA: $7,000 + $1,000 catch-up (50+). SIMPLE: $16,500 + $3,500 catch-up. SEP-IRA: lesser of 25% of compensation or $70,000.", domain: "retirement", category: "Retirement Accounts" },

  { id: 89, term: "Traditional IRA Deductibility Phase-Out (2025)", definition: "If covered by employer plan — Single: $79K–$89K; MFJ (covered): $126K–$146K. If NOT covered but SPOUSE IS covered: $236K–$246K MFJ. Above phase-out: non-deductible contribution still allowed; track basis on Form 8606.", domain: "retirement", category: "IRA Types" },

  { id: 90, term: "Roth IRA Contribution Phase-Out (2025)", definition: "Single: $150K–$165K. MFJ: $236K–$246K. Above limit: cannot contribute directly (use Backdoor Roth). No RMDs during owner's lifetime. Estate planning tool: beneficiaries can stretch over 10 years.", domain: "retirement", category: "IRA Types" },

  { id: 91, term: "Roth IRA 5-Year Rule", definition: "For TAX-FREE earnings withdrawal: Roth must be open 5+ years AND owner must be 59½+. Contributions (basis) can always be withdrawn tax and penalty-free at any time, in any order. Clock starts January 1 of the year the first contribution was made.", domain: "retirement", category: "IRA Types" },

  { id: 92, term: "Backdoor Roth IRA", definition: "Strategy for high earners above Roth direct contribution limits: contribute non-deductible to Traditional IRA → immediately convert to Roth. Watch pro-rata rule: if you have other pre-tax IRA balances, the conversion is prorated (partially taxable).", domain: "retirement", category: "IRA Types" },

  { id: 93, term: "RMD Starting Age & Formula", definition: "RMDs begin April 1 of the year after the year you turn 73 (SECURE 2.0). Formula: Prior December 31 account balance ÷ Uniform Lifetime Table life expectancy factor. Miss an RMD? 25% penalty (reduced to 10% if corrected within 2 years).", domain: "retirement", category: "RMD" },

  { id: 94, term: "Inherited IRA — 10-Year Rule (Non-Spouse)", definition: "Non-eligible designated beneficiaries (most non-spouses) must empty the inherited IRA by December 31 of the 10th year after the owner's death. No mandatory annual distributions required — just must empty by year 10. Roth IRA: same rule but distributions are tax-free.", domain: "retirement", category: "RMD" },

  { id: 95, term: "IRA Early Withdrawal Exceptions (10% Penalty)", definition: "Exceptions: age 59½+, death, disability, SEPP/72(t), first-time homebuyer ($10K lifetime), higher education expenses, health insurance premiums (unemployed), unreimbursed medical > 7.5% AGI, IRS levy, birth/adoption ($5K). 401(k) adds: age 55 separation, QDRO, plan loans.", domain: "retirement", category: "Distribution Rules" },

  { id: 96, term: "SEPP / 72(t) Distributions", definition: "Substantially Equal Periodic Payments: withdraw from IRA before 59½ without 10% penalty. Must continue for the LONGER of 5 years or until age 59½. Three IRS-approved calculation methods: RMD method, amortization method, annuitization method. Modification restarts penalty retroactively.", domain: "retirement", category: "Distribution Rules" },

  { id: 97, term: "Social Security Full Retirement Age (FRA)", definition: "FRA is 67 for those born in 1960 or later. Claiming before FRA permanently reduces benefit: 5/9% per month for first 36 months early, 5/12% per month beyond 36 months. Maximum reduction at 62 = ~30% reduction from FRA benefit.", domain: "retirement", category: "Social Security" },

  { id: 98, term: "Social Security Delayed Credits", definition: "Delaying SS beyond FRA earns 8% per year in delayed retirement credits, up to age 70. Maximum benefit locked in at 70 — no benefit to waiting beyond 70. Break-even analysis compares claiming age strategies.", domain: "retirement", category: "Social Security" },

  { id: 99, term: "Social Security Spousal & Survivor Benefits", definition: "Spousal benefit: up to 50% of primary worker's PIA (at FRA); reduced if claimed before FRA. Survivor benefit: up to 100% of deceased spouse's benefit (if survivor is at FRA). Survivor can claim as early as age 60.", domain: "retirement", category: "Social Security" },

  { id: 100, term: "Social Security Taxation Thresholds", definition: "Combined income = AGI + non-taxable interest + 50% of SS benefits. Below $25K single/$32K MFJ: 0% taxable. $25K-$34K single/$32K-$44K MFJ: up to 50% taxable. Above: up to 85% of SS is taxable. Maximum taxable portion is 85%.", domain: "retirement", category: "Social Security" },

  { id: 101, term: "Social Security Earnings Test (Pre-FRA)", definition: "If collecting SS before FRA while still working: lose $1 of benefits for every $2 earned above $22,320 (2025). In the year you reach FRA: $1 withheld per $3 earned above $59,520 (2025). After FRA: no earnings limit.", domain: "retirement", category: "Social Security" },

  { id: 102, term: "Medicare Parts A, B, C, D", definition: "Part A: Hospital (premium-free if 40+ quarters worked; $1,676 deductible per benefit period). Part B: Medical (standard premium $185/month; $257 annual deductible). Part C: Medicare Advantage (private; replaces A+B+usually D). Part D: Prescription drugs.", domain: "retirement", category: "Medicare" },

  { id: 103, term: "IRMAA — Medicare Income Surcharges", definition: "Income-Related Monthly Adjustment Amount: higher-income beneficiaries pay more for Part B and Part D. Based on MAGI from 2 years prior (2-year lookback). 2024 income affects 2026 premiums. Can appeal if income has decreased due to life-changing event.", domain: "retirement", category: "Medicare" },

  { id: 104, term: "SEP-IRA vs. SIMPLE IRA", definition: "SEP-IRA: employer-only contributions; up to lesser of 25% of compensation or $70,000 (2025); no catch-up; instant vesting; simple administration. SIMPLE IRA: employer + employee contributions; $16,500 limit (2025) + $3,500 catch-up; must match (2% non-elective or 3% match).", domain: "retirement", category: "Retirement Accounts" },

  { id: 105, term: "401(k) Plan Loans", definition: "Participants can borrow up to the lesser of $50,000 or 50% of vested account balance. Loans must be repaid within 5 years (longer for primary residence). No 10% penalty while loan is active. If not repaid (e.g., termination), treated as taxable distribution + 10% penalty.", domain: "retirement", category: "401k" },

  { id: 106, term: "4% Rule — Retirement Income", definition: "Withdraw 4% of portfolio in year one; adjust annually for inflation. Historically supports ~30-year retirement without depleting portfolio. Sequence of returns risk is the primary threat — early portfolio declines amplify withdrawal impact.", domain: "retirement", category: "Retirement Income" },

  { id: 107, term: "Roth Conversion Strategy", definition: "Convert traditional IRA to Roth by paying ordinary income tax in year of conversion. Best times: low-income years, early retirement before SS begins, market downturns (lower balance = lower tax). Monitor impact on IRMAA (2-year lookback), ACA subsidies, and Medicare costs.", domain: "retirement", category: "IRA Types" },


  // ── ESTATE PLANNING (10) ────────────────────────────────────────────────────

  { id: 108, term: "Annual Gift Tax Exclusion (2025)", definition: "$19,000 per recipient per year. Gift-splitting (married couples): $38,000 per recipient. Direct tuition or medical payments to institutions: unlimited exclusion (doesn't count against $19K). Gifts above annual exclusion require Form 709 and reduce lifetime exemption.", domain: "estate", category: "Gifting" },

  { id: 109, term: "Lifetime Gift & Estate Tax Exemption", definition: "$13,990,000 per individual in 2025. OBBBA: increases to $15M per person starting 2026, inflation-indexed going forward. Unified credit — same exemption applies to lifetime taxable gifts and estate at death. Top rate: 40%.", domain: "estate", category: "Estate Tax" },

  { id: 110, term: "Portability of Estate Tax Exemption", definition: "A surviving spouse can use the deceased spouse's unused estate tax exemption (DSUE) by filing Form 706 within 9 months of death (extension to 15 months available). GST exemption is NOT portable — plan separately.", domain: "estate", category: "Estate Tax" },

  { id: 111, term: "Step-Up in Basis at Death", definition: "Assets inherited get a new basis equal to fair market value at date of death, eliminating embedded capital gains. Key estate planning benefit. Heirs can immediately sell inherited assets with little to no capital gain. Alternate valuation date: use 6-month-post-death value if it reduces estate tax.", domain: "estate", category: "Estate Tax" },

  { id: 112, term: "QTIP Trust (Qualified Terminable Interest Property)", definition: "Provides income to surviving spouse for life; qualifies for marital deduction (estate not taxed at first death). First spouse controls who receives remainder at surviving spouse's death. Used to benefit current spouse while protecting children from prior marriage.", domain: "estate", category: "Trusts" },

  { id: 113, term: "ILIT (Irrevocable Life Insurance Trust)", definition: "The trust — not the insured — owns the life insurance policy. Removes death benefit from the taxable estate. Often funded with annual exclusion gifts (Crummey powers). Proceeds are estate-tax-free if insured has no incidents of ownership.", domain: "estate", category: "Trusts" },

  { id: 114, term: "GRAT (Grantor Retained Annuity Trust)", definition: "Grantor retains an annuity payment for a fixed term; remaining assets pass to heirs. If assets appreciate above the §7520 hurdle rate, excess transfers gift-tax-free. Zeroed-out GRAT = annuity set so gift value = 0 (no gift tax). Grantor must survive the term.", domain: "estate", category: "Trusts" },

  { id: 115, term: "Bypass Trust (Credit Shelter Trust)", definition: "Funded at first spouse's death with up to the estate tax exemption amount. Passes to trust (not directly to spouse), so it uses the first spouse's exemption without relying on portability. Beneficiaries (often children) receive trust assets estate-tax-free at survivor's death.", domain: "estate", category: "Trusts" },

  { id: 116, term: "Probate vs. Non-Probate Assets", definition: "Probate assets: controlled by will (or intestacy); public record; can be slow and costly. Non-probate assets pass outside the will via: JTWROS (joint tenancy), beneficiary designations (IRA, 401k, life insurance, annuity, TOD/POD), or revocable living trust. Beneficiary designations TRUMP the will.", domain: "estate", category: "Probate" },

  { id: 117, term: "Incapacity Planning Documents", definition: "Durable Power of Attorney: agent handles financial matters if incapacitated. Healthcare POA/Proxy: agent makes medical decisions. Living Will (Advance Directive): states end-of-life wishes. HIPAA Authorization: allows healthcare providers to share medical info with designated people.", domain: "estate", category: "Incapacity" },


  // ── PSYCHOLOGY OF FINANCIAL PLANNING (8) ────────────────────────────────────

  { id: 118, term: "Loss Aversion & Prospect Theory", definition: "Kahneman and Tversky found losses feel approximately 2× as painful as equivalent gains feel good. This explains why clients hold losers too long (hoping to break even) and sell winners too early (locking in gains). CFP® must help clients reframe decisions objectively.", domain: "psychology", category: "Behavioral Biases" },

  { id: 119, term: "Anchoring Bias", definition: "Over-relying on the first piece of information encountered as a reference point. Example: fixating on a stock's purchase price when evaluating whether to sell. CFP® should present multiple data points and redirect focus to forward-looking analysis.", domain: "psychology", category: "Behavioral Biases" },

  { id: 120, term: "Overconfidence & Confirmation Bias", definition: "Overconfidence: overestimating one's own skill, leading to excessive trading and risk-taking. Confirmation bias: seeking information that confirms existing beliefs while ignoring contradictory evidence. Both lead to suboptimal portfolio decisions.", domain: "psychology", category: "Behavioral Biases" },

  { id: 121, term: "Recency Bias & Mental Accounting", definition: "Recency bias: overweighting recent events (extrapolating last year's returns). Mental accounting: treating money differently based on source or mental category (e.g., spending 'windfall' money recklessly). CFP® should help clients view all money as fungible.", domain: "psychology", category: "Behavioral Biases" },

  { id: 122, term: "Herding & Status Quo Bias", definition: "Herding: following the crowd — buying at market peaks, selling at troughs. Status quo bias: preference for the current state, leading to failure to rebalance or update beneficiary designations. Default options (auto-enrollment) exploit status quo bias productively.", domain: "psychology", category: "Behavioral Biases" },

  { id: 123, term: "Motivational Interviewing", definition: "Client communication technique using open-ended questions to draw out the client's own motivation for change. Reflective listening, validation, and exploring ambivalence. Avoids direct advice-giving until client is ready. Increases client buy-in and follow-through.", domain: "psychology", category: "Motivational Interviewing" },

  { id: 124, term: "Risk Tolerance vs. Risk Capacity", definition: "Risk tolerance: emotional willingness to accept portfolio volatility (subjective). Risk capacity: financial ability to absorb losses based on time horizon, income stability, and liquidity needs (objective). A plan must satisfy BOTH — never let tolerance override capacity.", domain: "psychology", category: "Client Types" },

  { id: 125, term: "Nudge Theory & Choice Architecture", definition: "Default options heavily influence behavior. Auto-enrollment in 401(k) plans dramatically increases participation rates. Automatic escalation increases savings rates over time. Simplifying fund choices reduces decision paralysis. CFP® can use these principles to improve client outcomes.", domain: "psychology", category: "Behavioral Biases" },

];
