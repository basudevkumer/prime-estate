"use client";

import { useMemo, useState } from "react";

export function MortgageCalculator() {
  const [price, setPrice] = useState(4500000);
  const [downPayment, setDownPayment] = useState(500000);
  const [interest, setInterest] = useState(7.5);
  const [years, setYears] = useState(20);

  const monthlyPayment = useMemo(() => {
    const principal = price - downPayment;

    const monthlyRate = interest / 100 / 12;

    const payments = years * 12;

    if (monthlyRate === 0) {
      return principal / payments;
    }

    return (
      (principal *
        monthlyRate *
        Math.pow(
          1 + monthlyRate,
          payments
        )) /
      (Math.pow(
        1 + monthlyRate,
        payments
      ) -
        1)
    );
  }, [
    price,
    downPayment,
    interest,
    years,
  ]);

  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold">
        Mortgage Calculator
      </h2>

      <div className="glass-card mt-8 rounded-[32px] p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div>
              <label>Property Price</label>

              <input
                type="number"
                value={price}
                onChange={(e) =>
                  setPrice(Number(e.target.value))
                }
                className="input mt-2"
              />
            </div>

            <div>
              <label>Down Payment</label>

              <input
                type="number"
                value={downPayment}
                onChange={(e) =>
                  setDownPayment(
                    Number(e.target.value)
                  )
                }
                className="input mt-2"
              />
            </div>

            <div>
              <label>Interest Rate (%)</label>

              <input
                type="number"
                step="0.1"
                value={interest}
                onChange={(e) =>
                  setInterest(
                    Number(e.target.value)
                  )
                }
                className="input mt-2"
              />
            </div>

            <div>
              <label>Loan Years</label>

              <input
                type="number"
                value={years}
                onChange={(e) =>
                  setYears(Number(e.target.value))
                }
                className="input mt-2"
              />
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 flex flex-col justify-center">
            <p className="text-slate-400">
              Estimated Monthly Payment
            </p>

            <h3 className="mt-4 text-5xl font-bold text-gradient">
              $
              {monthlyPayment.toLocaleString(
                undefined,
                {
                  maximumFractionDigits: 0,
                }
              )}
            </h3>

            <p className="mt-5 text-slate-400">
              Estimated only.
              Taxes, insurance,
              HOA fees and other costs
              are not included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}