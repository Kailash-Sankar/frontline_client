// search results pagination format helper
export function getPaginationObject(
  pagination,
  onPageChange,
  onShowSizeChange
) {
  return {
    current: pagination.page,
    total: pagination.total,
    onChange: onPageChange,
    pageSize: pagination.limit,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
    showSizeChanger: true,
    onShowSizeChange: onShowSizeChange,
  };
}
