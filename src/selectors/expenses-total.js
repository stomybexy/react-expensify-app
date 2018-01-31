const getExpensesTotal = (expenses) => {
    return expenses
        .map(({ amount }) => amount)
        .reduce((total, currentAmount) => total + currentAmount, 0);
};

export default getExpensesTotal;