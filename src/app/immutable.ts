/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Recursive type to create a deeply-immutable version of another type.
 * 
 * There is no runtime enforcement of immutability here: it is compile-time only.
 * 
 * If using this type for component @Inputs in order to use ChangeDetectionStrategy.OnPush,
 * ensure it is used right up the component hierarchy to the point where it can be
 * guaranteed that no part of the application is modifying the objects being passed into
 * the component as inputs.
 */ 
export type Immutable<T> = {
    readonly [A in keyof T]: Immutable<T[A]>;
};