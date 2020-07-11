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

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Objective, CommitmentType } from '../objective';
import { Immutable } from '../immutable';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
  // All inputs must be immutable
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentComponent implements OnInit {
  @Input() objective?: Immutable<Objective>;
  @Input() assignedResources?: number;
  @Input() unit?: string;

  constructor() { }

  ngOnInit(): void {
  }

  isCommitted(): boolean {
    return !!this.objective && this.objective.commitmentType == CommitmentType.Committed;
  }
}
