import { Injectable } from '@angular/core';
import { CategoryCode } from '@dvsa/mes-test-schema/categories/common';
import { TestCategory } from '@dvsa/mes-test-schema/category-definitions/common/test-category';

// import { getVehicleDetails as getVehicleDetailsC }
//   from '../../modules/tests/vehicle-details/cat-c/vehicle-details.cat-c.reducer';
// import { getVehicleDetails as getVehicleDetailsD }
//   from '../../modules/tests/vehicle-details/cat-d/vehicle-details.cat-d.reducer';
// import { getVehicleDetails as getVehicleDetailsBE }
//   from '../../modules/tests/vehicle-details/cat-be/vehicle-details.cat-be.reducer';
// import { getVehicleDetails as getVehicleDetailsB }
//   from '../../modules/tests/vehicle-details/cat-b/vehicle-details.cat-b.reducer';
import { getVehicleDetails as getVehicleDetailsADI2 }
  from '@store/tests/vehicle-details/cat-adi-part2/vehicle-details.cat-adi-part2.reducer';
// import { getVehicleDetails as getVehicleDetailsAM1 }
//   from '../../modules/tests/vehicle-details/cat-a-mod1/vehicle-details.cat-a-mod1.reducer';
// import { getVehicleDetails as getVehicleDetailsAM2 }
//   from '../../modules/tests/vehicle-details/cat-a-mod2/vehicle-details.cat-a-mod2.reducer';
// import { getVehicleWidth as getVehicleWidthBE, getVehicleLength as getVehicleLengthBE }
//   from '../../modules/tests/vehicle-details/cat-be/vehicle-details.cat-be.selector';
// import { getVehicleWidth as getVehicleWidthC, getVehicleLength as getVehicleLengthC }
//   from '../../modules/tests/vehicle-details/cat-c/vehicle-details.cat-c.selector';
// import { getVehicleWidth as getVehicleWidthD, getVehicleLength as getVehicleLengthD }
//   from '../../modules/tests/vehicle-details/cat-d/vehicle-details.cat-d.selector';
// import { getVehicleDetails } from '../../modules/tests/vehicle-details/common/vehicle-details.reducer';

export interface CategorySpecificVehicleDetails {
  vehicleDetails: any;
  vehicleWidth: any;
  vehicleLength: any;
}

@Injectable()
export class VehicleDetailsByCategoryProvider {

  static getVehicleDetailsByCategoryCodeErrMsg: string = 'Error getting test category vehicle details';

  public getVehicleDetailsByCategoryCode(category: CategoryCode): CategorySpecificVehicleDetails {
    switch (category) {
      case TestCategory.ADI2:
        return {
          vehicleDetails: getVehicleDetailsADI2,
          vehicleWidth: null,
          vehicleLength: null,
        };
      // case TestCategory.B:
      //   return {
      //     vehicleDetails: getVehicleDetailsB,
      //     vehicleWidth: null,
      //     vehicleLength: null,
      //   };
      // case TestCategory.BE:
      //   return {
      //     vehicleDetails: getVehicleDetailsBE,
      //     vehicleWidth: getVehicleWidthBE,
      //     vehicleLength: getVehicleLengthBE,
      //   };
      // case TestCategory.C:
      // case TestCategory.C1:
      // case TestCategory.CE:
      // case TestCategory.C1E:
      //   return {
      //     vehicleDetails: getVehicleDetailsC,
      //     vehicleWidth: getVehicleWidthC,
      //     vehicleLength: getVehicleLengthC,
      //   };
      // case TestCategory.D:
      // case TestCategory.D1:
      // case TestCategory.DE:
      // case TestCategory.D1E:
      //   return {
      //     vehicleDetails: getVehicleDetailsD,
      //     vehicleWidth: getVehicleWidthD,
      //     vehicleLength: getVehicleLengthD,
      //   };
      // case TestCategory.F:
      // case TestCategory.G:
      // case TestCategory.H:
      // case TestCategory.K:
      //   return {
      //     vehicleDetails: getVehicleDetails,
      //     vehicleWidth: null,
      //     vehicleLength: null,
      //   };
      // case TestCategory.EUA1M1:
      // case TestCategory.EUA2M1:
      // case TestCategory.EUAM1:
      // case TestCategory.EUAMM1:
      //   return {
      //     vehicleDetails: getVehicleDetailsAM1,
      //     vehicleWidth: null,
      //     vehicleLength: null,
      //   };
      // case TestCategory.EUA1M2:
      // case TestCategory.EUA2M2:
      // case TestCategory.EUAM2:
      // case TestCategory.EUAMM2:
      //   return {
      //     vehicleDetails: getVehicleDetailsAM2,
      //     vehicleWidth: null,
      //     vehicleLength: null,
      //   };
      default:
        throw new Error(VehicleDetailsByCategoryProvider.getVehicleDetailsByCategoryCodeErrMsg);
    }
  }
}
