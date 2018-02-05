export const toArray = (snapshot) => {
    const data = [];
    snapshot.forEach(childSnapshot => {
        data.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    return data;
};
