//
export const formatDaysAgo = (dateString) => {
  const now = new Date();
  const updatedDate = new Date(dateString);

  const diffTime = now - updatedDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 30) {
    return `${diffDays} days ago`;
  } else {
    const diffMonths = Math.floor(diffDays / 30);
    return diffMonths === 1 ? "1 month ago" : `${diffMonths} months ago`;
  }
};
