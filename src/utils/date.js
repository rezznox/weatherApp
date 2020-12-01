export function groupByCntsFn(cnts) {

    const groupByCnts = {};

    cnts.forEach((cnt) => {
        const day = cnt.dt_txt.split(' ')[0];
        if (groupByCnts[day]) {
            groupByCnts[day].push(cnt)
        } else {
            groupByCnts[day] = [];
            groupByCnts[day].push(cnt)
        }
    });

    return groupByCnts;
};