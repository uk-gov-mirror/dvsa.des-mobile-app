import { TestSlot } from '@dvsa/mes-journal-schema';
import { SlotTypes } from '../models/slot-types';

export enum SpecialNeedsCode {
  NONE = 'NONE',
  YES = 'YES',
  EXTRA = 'EXTRA',
}

export const getSlotType = (slot: TestSlot): string => {
  const { specialNeedsExtendedTest } = slot.booking.application;
  const { specialNeedsCode } = slot.booking.application;
  const { vehicleSlotTypeCode } = slot;

  if (vehicleSlotTypeCode === 6) {
    if (specialNeedsCode !== SpecialNeedsCode.NONE) {
      return SlotTypes.SINGLE_SLOT_SPECIAL_NEEDS;
    }
  }

  if (vehicleSlotTypeCode === 14) {
    if (specialNeedsCode !== SpecialNeedsCode.NONE) {
      return SlotTypes.SINGLE_SLOT_SPECIAL_NEEDS;
    }
  }

  if (specialNeedsExtendedTest) {
    if (specialNeedsCode === SpecialNeedsCode.NONE) {
      return SlotTypes.EXTENDED_TEST;
    }
    return SlotTypes.EXTENDED_TEST_SPECIAL_NEEDS;
  }

  if (specialNeedsCode === SpecialNeedsCode.NONE) {
    return SlotTypes.STANDARD_TEST;
  }
  if (specialNeedsCode === SpecialNeedsCode.YES) {
    return SlotTypes.STANDARD_TEST;
  }
  return SlotTypes.SPECIAL_NEEDS_EXTRA_TIME;
};
