package com.devonfw.application.jtqjavaqueuedetailmanagement.logic.impl;

import java.sql.Timestamp;
import java.time.Instant;

import javax.inject.Inject;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.devonfw.application.jtqjava.SpringBootApp;
import com.devonfw.application.jtqjava.eventmanagement.logic.api.Eventmanagement;
import com.devonfw.application.jtqjava.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqjava.queuedetailmanagement.logic.api.Queuedetailmanagement;
import com.devonfw.application.jtqjava.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqjava.visitormanagement.logic.api.Visitormanagement;
import com.devonfw.application.jtqjava.visitormanagement.logic.api.to.VisitorEto;
import com.devonfw.module.test.common.base.ComponentTest;

/**
 * @author kragarwa
 *
 */
@SpringBootTest(classes = SpringBootApp.class)
public class QueueDetailmanagementTest extends ComponentTest {

  private QueueDetailEto queueDetailEto = new QueueDetailEto();

  private VisitorEto visitorEto = new VisitorEto();

  private EventEto eventEto = new EventEto();

  @Inject
  private Eventmanagement eventmanagement;

  @Inject
  private Visitormanagement visitormanagement;

  @Inject
  private Queuedetailmanagement queueDetailmanagement;

  @Override
  protected void doSetUp() {

    this.visitorEto.setName("Mary");
    this.visitorEto.setUsername("mary@mary.com");
    this.visitorEto.setPhoneNumber("123456789");
    this.visitorEto.setPassword("test");
    this.visitorEto.setUserType(false);
    this.visitorEto.setAcceptedTerms(true);
    this.visitorEto.setAcceptedCommercial(true);

    this.eventEto.setEventName("December Fest");
    this.eventEto.setStartDate(Timestamp.from(Instant.now()));
    this.eventEto.setEndDate(Timestamp.from(Instant.now()));
    this.eventEto.setLocation("Banglore");
    this.eventEto.setDescription("Biggest december eve is here");
    this.eventEto.setLogo("");
    this.eventEto.setVisitorCount(1);
    this.eventEto.setAttentionTime("5");

  }

  @Test
  public void saveQueueDetailTest() {

    EventEto eventEtoResult = this.eventmanagement.saveEvent(this.eventEto);
    VisitorEto visitorEtoResult = this.visitormanagement.saveVisitor(this.visitorEto);
    this.queueDetailEto.setEventId(eventEtoResult.getId());
    this.queueDetailEto.setVisitorId(visitorEtoResult.getId());
    QueueDetailEto queueDetailEtoResult = this.queueDetailmanagement.saveQueueDetail(this.queueDetailEto);

    assertThat(queueDetailEtoResult.getId()).isNotNull();
  }
}
