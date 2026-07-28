function PlanTabs({ activePlan, setActivePlan }) {
  const plans = ["Basic", "Standard", "Premium"];

  return (
    <div className="flex rounded-full bg-white p-1">
      {plans.map((plan) => (
        <button
          key={plan}
          onClick={() => setActivePlan(plan)}
          className={`rounded-full px-7 py-3 text-xs ${
            activePlan === plan
              ? "bg-[#3fd6cc] text-black"
              : "text-black"
          }`}
        >
          {plan}
        </button>
      ))}
    </div>
  );
}

export default PlanTabs;