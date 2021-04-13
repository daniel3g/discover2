module.exports = {
  remainingDays(job) {
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
  
      const createdDate = new Date(job.createdAt);
      const dueDay = createdDate.getDate() + Number(remainingDays)
      const dueDate = createdDate.setDate(dueDay);
  
      const timeDissInMs = dueDate - Date.now();
      const dayDiff = Math.ceil(timeDissInMs / 86400000);
  
      return dayDiff;
  },

  calculaBudget: (job, valueHour) => valueHour * job["total-hours"]
}