import catchAsync from '../utils/catchAsync.js';
import checkItemType from '../utils/checkItemType.js';

export const getAllItems = catchAsync(async (req, res, next) => {
  const items = await checkItemType(req.params.itemType).find();

  res.status(200).json({
    status: 'success',
    results: items.length,
    data: {
      items,
    },
  });
});

export const getItem = catchAsync(async (req, res, next) => {
  const item = await checkItemType(req.params.itemType).findById(req.params.id);

  if (!item) return next('No item found with this ID', 404);

  res.status(200).json({
    status: 'success',
    data: {
      item,
    },
  });
});

export const createNewItem = catchAsync(async (req, res, next) => {
  const item = await checkItemType(req.params.itemType).create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      item,
    },
  });
});

export const updateItem = catchAsync(async (req, res, next) => {
  const item = await checkItemType(req.params.itemType).findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!item) return next('No item found with this ID', 404);

  res.status(200).json({
    status: 'success',
    data: {
      item,
    },
  });
});

export const deleteBook = catchAsync(async (req, res, next) => {
  const item = await checkItemType(req.params.itemType).findByIdAndDelete(
    req.params.id
  );

  if (!item) return next('No item found with this ID', 404);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
