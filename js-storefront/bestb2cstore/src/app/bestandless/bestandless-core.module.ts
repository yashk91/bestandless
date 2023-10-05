import { NgModule } from "@angular/core";
import { BestAndLessAddToCartModule } from "./features/cart/add-to-cart/add-to-cart.module";
import { BottomSheetModule } from "./dailogs/bottom-sheet/bottom-sheet.module";


@NgModule({
    imports:[BottomSheetModule]
})
export class BestAndLessCoreModule{}